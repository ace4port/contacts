import React, { useEffect, useState } from 'react'

import SeachIcon from '../../components/icons/Search'
import AddIcon from '../../components/icons/Add'
import FilterIcon from '../../components/icons/Filter'
import CloseIcon from '../../components/icons/Close'

import Contact from '../../components/Contact'
import Tooltip from '../../components/Tooltip'

import { getAll, getOne, list, loading as loadR, success as successR } from '../../features/contact/contactSlice'
import { useSelector, useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

const ViewAll = ({ setScreen }) => {
  const [search, setSearch] = useState('')
  const [searchbar, setSearchBar] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const [filterEmail, setFilterEmail] = useState(false)
  const [filterPhone, setFilterPhone] = useState(false)
  const [filterAvailable, setFilterAvailable] = useState(false)

  const contacts = useSelector(list)
  const success = useSelector(successR)
  const loading = useSelector(loadR)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll()).then(unwrapResult)
  }, [dispatch])

  return (
    <div className="contact">
      <div className="contact--head">
        {!searchbar ? (
          <div className="contact--header">
            <p className="header">Contacts List</p>
            <div className="icons">
              <div className="icon" onClick={() => setSearchBar(!searchbar)}>
                <SeachIcon />
              </div>
              <div className="icon" onClick={() => setScreen('create')}>
                <AddIcon />
              </div>
            </div>
          </div>
        ) : (
          <div className="contact--header2">
            <div className="">
              <input
                className="input"
                name="search"
                value={search}
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                autoComplete='off'
              />
              <button className="btn--icon__search">
                <SeachIcon />
              </button>
            </div>
            <div className="icons">
              {showTooltip && (
                <Tooltip
                  filterEmail={filterEmail}
                  filterPhone={filterPhone}
                  filterAvailable={filterAvailable}
                  setFilterEmail={setFilterEmail}
                  setFilterPhone={setFilterPhone}
                  setFilterAvailable={setFilterAvailable}
                />
              )}
              <div className="icon" onClick={() => setShowTooltip(!showTooltip)}>
                <FilterIcon />
              </div>
              <div className="icon" onClick={() => setSearchBar(!searchbar)}>
                <CloseIcon />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`back`}>
        {loading && <h4>Loading ...</h4>}
        {success && searchbar
          ? contacts
              .filter((val) =>
                val.first_name.toLowerCase().includes(search.toLowerCase()) ||
                val.mid_name.toLowerCase().includes(search.toLowerCase()) ||
                val.last_name.toLowerCase().includes(search.toLowerCase())
                  ? val
                  : search === '' && val
              )
              .filter((val) => (!filterEmail ? val : val.emails.length && val))
              .filter((val) => (!filterPhone ? val : val.phones.length && val))
              .filter((val) => (!filterAvailable ? val : val.is_available && val))
              .map((data) => (
                <div className={`${showTooltip ? 'blur' : ''}`} key={data.id}>
                  <Contact
                    name={`${data.first_name} ${data.last_name}`}
                    active={data.is_available}
                    onClick={() => dispatch(getOne(data.id)).then(unwrapResult).then(setScreen('view'))}
                  />
                </div>
              ))
          : contacts.map((data) => (
              <Contact
                name={`${data.first_name} ${data.last_name}`}
                active={data.is_available}
                onClick={() => dispatch(getOne(data.id)).then(unwrapResult).then(setScreen('view'))}
                key={data.id}
              />
            ))}
      </div>
    </div>
  )
}

export default ViewAll

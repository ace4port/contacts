import React from 'react'
import Button from '../../components/Button'
import Avatar from '../../components/Avatar'
import EditIcon from '../../components/icons/Edit'
import CloseIcon from '../../components/icons/Close'
import MailIcon from '../../components/icons/Mail'
import PhoneIcon from '../../components/icons/Phone'

import { useSelector } from 'react-redux'
import {  contactEdits, contactView, create, edit, loading as load, success as scs } from '../../features/contact/contactSlice'
import { useDispatch } from 'react-redux'

const Addcontacts = ({ setScreen }) => {
  const contact = useSelector(contactView)
  const contactE = useSelector(contactEdits)
  const loading = useSelector(load)
  const success = useSelector(scs)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!contactE.id) {
      console.log('Create action dispatched')
      dispatch(create(contact)).then(setScreen('view'))
    } else {
      console.log('From verify contact: ', contactE)
      dispatch(edit(contactE)).then(setScreen('view'))
    } 
  }

  const firstLetter = contact.first_name ?  contact.first_name[0] : 'X'

  console.log(contact.emails)
  return (
    <div className="contact-view">
      <div className="icons">
        <EditIcon onClick={() => setScreen('edit')} />
        <CloseIcon className="icon2" onClick={() => setScreen('main')} />
      </div>

      {success && <div className="head">
         <Avatar variant="large" label={firstLetter} />
        <p className="name">{`${contact.first_name} ${contact.mid_name} ${contact.last_name}`}</p>
      </div>}

      <hr className="divider" />

      <div>
        {loading && <h3>Loading ...</h3>}
        {success && contact.emails.length ? (
          contact.emails.map((data) => <Property type="mail" data={data} />)
        ) : (
          <h4>No emails for this contact</h4>
        )}

        {success && contact.phones[0].phone ? (
          contact.phones.map((data) => <Property type="phone" data={data.phone} label={data.label} />)
        ) : (
          <h4>No phone numbers for this contact</h4>
        )}
      </div>

      <div className="buttons">
        <Button variant="outlined" size="small" onClick={() => setScreen('main')}>
          Cancel
        </Button>
        <Button variant="secondary" size="default" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  )
}

export default Addcontacts

const Property = ({ type, data, label }) => {
  const mail = typeof data === 'string' ? data : data.email
  return (
    <div className="property">
      {type === 'mail' ? (
        <>
          <div className="icon">
            <MailIcon />
          </div>
          <p className="text">{mail}</p>
        </>
      ) : (
        <>
          <div className="icon">
            <PhoneIcon />
          </div>
          <div className='' style={{display: 'flex', justifyContent: 'space-between'}}>
          <p className="text">{data}</p> &emsp;&emsp;&emsp;
          <p className="text">{label}</p>
          </div>
        </>
      )}
    </div>
  )
}

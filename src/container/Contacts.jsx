import React from 'react'
import SeachIcon from '../components/icons/Search'
import AddIcon from '../components/icons/Add'

import Contact from '../components/Contact'

const Contacts = () => {
  return (
    <div className="contact">
      <div className="contact--header">
        <p>Contacts List</p>
        <div className="icons">
          <div className="icon">
            <SeachIcon />
          </div>
          <div className="icon">
            <AddIcon />
          </div>
        </div>
      </div>
      <div>
        <Contact name="Mohammad Wajih Tagourty" active={true} />
        <Contact name="Saad Rashid" />
      </div>
    </div>
  )
}

export default Contacts

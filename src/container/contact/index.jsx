import React, {  useState } from 'react'
import SeachIcon from '../../components/icons/Search'
import AddIcon from '../../components/icons/Add'

import Contact from '../../components/Contact'

import CreateContact from './CreateContact'
import EditContact from './EditContact'

import VerifyContact from './VerifyContact'
import ViewContact from './ViewContact'

const Contacts = () => {
    const screens = {
        main: Con,
        verify: VerifyContact,
        edit: EditContact,
        view: ViewContact,
        create: CreateContact,
    }
    const [screen, setScreen] = useState('main')
  return React.createElement(screens[screen], {setScreen})
}

export default Contacts

const Con = ({ setScreen }) => {
  return (
    <div className="contact">
      <div className="contact--header">
        <p>Contacts List</p>
        <div className="icons">
          <div className="icon" onClick={() => setScreen('verify')}>
            <SeachIcon />
          </div>
          <div className="icon" onClick={() => setScreen('create')}>
            <AddIcon />
          </div>
        </div>
      </div>
      <div>
        {/* Map incoming components here */}
        <Contact name="Mohammad Wajih Tagourty" active={true} onClick={()=> setScreen('view')} />
        <Contact name="Saad Rashid" onClick={()=> setScreen('view')} />
      </div>
    </div>
  )
}

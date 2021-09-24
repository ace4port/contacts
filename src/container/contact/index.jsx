import React, { useState } from 'react'

import CreateContact from './CreateContact'
import EditContact from './EditContact'

import VerifyContact from './VerifyContact'
import ViewContact from './ViewContact'
import ViewAll from './ViewAll'

const Contacts = () => {
  const screens = {
    main: ViewAll,
    verify: VerifyContact,
    edit: EditContact,
    view: ViewContact,
    create: CreateContact,
  }
  const [screen, setScreen] = useState('main')
  return React.createElement(screens[screen], { setScreen })
}

export default Contacts
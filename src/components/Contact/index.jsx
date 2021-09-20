import React from 'react'
import './styles.scss'

import Avatar from '../../components/Avatar'
import Availability from '../../components/Availability'

const Contact = ({ name, active }) => {
  return (
    <div className='contact-item'>
      <Avatar label={name[0]} />
      <p>{name}</p>
      <Availability active={active}/>
    </div>
  )
}

export default Contact

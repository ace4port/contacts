import React from 'react'
import './styles.scss'

import Avatar from '../../components/Avatar'
import Availability from '../../components/Availability'

const Contact = ({ name, active, ...props }) => {
  return (
    <div className="contact-item" {...props}>
      <div className="contact-item-av">
        <Avatar label={name[0]} />
      </div>
      <div className="contact-item-name">
        <p>{name}</p>
      </div>
      <div className="contact-item-av">
        <Availability active={active} />
      </div>
    </div>
  )
}

export default Contact

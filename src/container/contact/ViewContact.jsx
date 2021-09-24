import React from 'react'
import Avatar from '../../components/Avatar'
import EditIcon from '../../components/icons/Edit'
import CloseIcon from '../../components/icons/Close'
import MailIcon from '../../components/icons/Mail'
import PhoneIcon from '../../components/icons/Phone'
import Availability from '../../components/Availability'
import { useSelector } from 'react-redux'
import { success as successR, loading as loadingR, contactView } from '../../features/contact/contactSlice'

const ViewContact = ({ setScreen }) => {
  const success = useSelector(successR)
  const loading = useSelector(loadingR)
  const contact = useSelector(contactView)

  return (
    <div className="contact-view">
      <div className="icons">
        <EditIcon onClick={() => setScreen('edit')} />
        <CloseIcon className="icon2" onClick={() => setScreen('main')} />
      </div>
      {loading && <h4>Loading ...</h4>}
      {success && (
        <>
          <div className="head">
            <Avatar variant="large" label={contact.first_name[0]} />
            <div className="av-foot">
              <Availability active={contact.availability} />
            </div>
            <p className="name">{`${contact.first_name} ${contact.mid_name} ${contact.last_name}`}</p>
          </div>

          <hr className="divider" />

          <div>
            {contact.emails[0] ? (
              contact.emails.map((data) => <Property type="mail" data={data} />)
            ) : contact.emails[0] === '' ? (
              contact.emails.map((data) => <Property type="mail" data={data} />)
            ) : (
              <h4>No emails for this contact</h4>
            )}
            {contact.phones[0]?.phone ? (
              contact.phones.map((data) => <Property type="phone" data={data.phone} label={data.label} />)
            ) : (
              <h4>No phone numbers for this contact</h4>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default ViewContact

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
          <p className="text">{data}</p> &emsp;&emsp;&emsp;
          <p className="text">{label}</p>
        </>
      )}
    </div>
  )
}

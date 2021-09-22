import React, { useState } from 'react'
import IntlTelInput from 'react-intl-tel-input'
import Button from '../../components/Button'
import 'react-intl-tel-input/dist/main.css'

import AddIcon from '../../components/icons/Add'
import MailIcon from '../../components/icons/Mail'
import PhoneIcon from '../../components/icons/Phone'

const EditContact = ({setScreen}) => {
  const [phone, setPhone] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="contact-add">
      <div className="contact--header"><p>Edit Contact</p></div>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <p className="details">Details</p>
          <input type="text" name="f-name" className="input" placeholder="First name" required />
          <input type="text" name="l-name" className="input" placeholder="Last name" required />
          <input type="text" name="m-name" className="input" placeholder="Middle name" />
        </fieldset>

        <fieldset>
          <p className="details">Email</p>
          <input type="email" name="email" className="input" placeholder="Email address" />
          <AddBtn type="mail" />
        </fieldset>

        <fieldset>
          <p className="details">Phone numbers</p>
          <IntlTelInput
            preferredCountries={['us', 'np']}
            format={true}
            name="phone"
            value={phone}
            onPhoneNumberChange={(e, f) => setPhone(f)}
            className="input"
          />
          <div>
          <label htmlFor="label">Label: </label>
          <select name="phone-label" className='input' id="label">
            <option value="home">Home</option>
            <option value="mobile">Mobile</option>
            <option value="work">Work</option>
            <option value="main">Main</option>
            <option value="fax">Fax</option>
            <option value="other">Custom</option>
          </select>
          </div>
          <AddBtn type="phone" />
        </fieldset>

        <div className="buttons">
          <Button type="button" variant="outlined" size="small" onClick={() => setScreen('main')}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" size="default">
            Verify
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditContact

const AddBtn = ({ type }) => {
  return (
    <div className="add">
      <AddIcon />
      {type === 'mail' && <MailIcon />}
      {type === 'phone' && <PhoneIcon />}
    </div>
  )
}

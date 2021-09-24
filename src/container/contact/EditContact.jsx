import React, { useState } from 'react'
import Button from '../../components/Button'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'

import CloseIcon from '../../components/icons/Close'
import { AddBtn } from './CreateContact'

import { useDispatch, useSelector } from 'react-redux'
import { contact as contactR, verifyEdit } from '../../features/contact/contactSlice'

const EditContact = ({ setScreen }) => {
  const contact = useSelector(contactR)

  const [formdata, setFormdata] = useState({
    firstName: contact.first_name,
    lastName: contact.last_name,
    midName: contact.mid_name,
  })
  const [emails, setEmails] = useState([...contact.emails])
  const [phones, setPhones] = useState(contact.phones)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted', 'Formdata:', formdata, 'Emails: ', emails, 'Phones', phones)
    dispatch(
      verifyEdit({
        id: contact.id,
        first_name: formdata.firstName,
        mid_name: formdata.midName,
        last_name: formdata.lastName,
        emails: emails.map((data) => data),
        phones,
      })
    ).then(setScreen('verify'))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormdata({ ...formdata, [name]: value })
  }

  const email_list = (data) => {
    setEmails(data)
  }
  const phone_list = (data) => {
    setPhones(data)
  }

  return (
    <div className="contact-add">
      <div className="contact--header">
        <p className="header">Edit Contact</p>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <p className="details">Details</p>
          <input
            type="text"
            name="firstName"
            className="input"
            placeholder="First name"
            value={formdata.firstName}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="text"
            name="lastName"
            className="input"
            placeholder="Last name"
            value={formdata.lastName}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="text"
            name="midName"
            className="input"
            placeholder="Middle name"
            value={formdata.midName}
            onChange={(e) => handleChange(e)}
          />
        </fieldset>

        <fieldset>
          <EmailInput func={email_list} emails={contact.emails} />
        </fieldset>

        <fieldset>
          <PhoneInput func={phone_list} phones={contact.phones} />
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

const EmailInput = (props) => {
  const init_email = props.emails.map((data) => data.email)
  const [emailList, setEmailList] = useState([...init_email])

  const handleChange = (e, i) => {
    const val = e.target.value
    const list = [...emailList]
    list[i] = val
    setEmailList(list)
  }

  const handleRemove = (i) => {
    const list = [...emailList]
    list.splice(i, 1)
    setEmailList(list)
  }
  const handleAdd = () => {
    setEmailList([...emailList, ''])
  }
  props.func(emailList)
  // console.log(JSON.stringify(emailList))
  return (
    <div>
      <p className="details">Email</p>
      {emailList.map((x, i) => (
        <div key={i}>
          <input
            type="email"
            name="email"
            className="input"
            value={x}
            onChange={(e) => handleChange(e, i)}
            placeholder="Email address"
          />
          {emailList.length !== 1 && <CloseIcon onClick={handleRemove} />}
          {emailList.length - 1 === i && <AddBtn type="mail" onClick={handleAdd} />}
        </div>
      ))}
    </div>
  )
}

const PhoneInput = (props) => {
  const init_phoneList = props.phones.map((data) => {
    return { phone: data.phone, label: data.label }
  })
  const [phoneList, setPhoneList] = useState([...init_phoneList])

  const handlePhoneChange = (f, i) => {
    const list = [...phoneList]
    list[i]['phone'] = f
    setPhoneList(list)
  }

  const handleLabelChange = (e, i) => {
    const { name, value } = e.target
    const list = [...phoneList]
    list[i][name] = value
    setPhoneList(list)
  }

  const handleRemove = (i) => {
    const list = [...phoneList]
    list.splice(i, 1)
    setPhoneList(list)
  }

  const handleAdd = () => {
    setPhoneList([...phoneList, { phone: '', label: 'Home' }])
  }

  props.func(phoneList)

  return (
    <div>
      <p className="details">Phone numbers</p>
      {phoneList.map((x, i) => (
        <div key={i}>
          <IntlTelInput
            preferredCountries={['us', 'np']}
            format={true}
            name="phone"
            value={x.phone}
            onPhoneNumberChange={(e, f) => handlePhoneChange(f, i)}
            className="input"
          />
          <div>
            <label htmlFor="label">Label: </label>
            <select name="label" className="input" id="label" defaultValue={toString(x.value)} onChange={(e) => handleLabelChange(e, i)}>
              <option disabled hidden value=""></option>
              <option value="home">Home</option>
              <option value="mobile">Mobile</option>
              <option value="work">Work</option>
              <option value="main">Main</option>
              <option value="fax">Fax</option>
              <option value="other">Custom</option>
            </select>
          </div>

          {phoneList.length !== 1 && <CloseIcon onClick={handleRemove} />}
          {phoneList.length - 1 === i && <AddBtn type="phone" onClick={handleAdd} />}
        </div>
      ))}
    </div>
  )
}

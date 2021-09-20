import React from 'react'
import Button from '../components/Button'

const CreateContact = () => {
  return (
    <div className="contact">
      <p className='contact--header'>Add Contact</p>

      <form>
        <fieldset>
          <legend>Details</legend>
          <input type='text' name='f-name' required />
          <input type='text' name='l-name' required />
          <input type='text' name='m-name' />
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input type='email' name='email'  />
        </fieldset>
        <fieldset>
          <legend>Phone Numbers</legend>
          <input type='string' name='phone'  />
        </fieldset>

        <div className='buttons'>
          <Button type='button' variant='outlined' size='small'>Cancel</Button>
          <Button type='submit' variant='primary' size='default'>Verify</Button>
        </div>
      </form>
    </div>
  )
}

export default CreateContact

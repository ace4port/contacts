import React from 'react'
import MailIcon from './icons/Mail'
import PhoneIcon from './icons/Phone'
import SliderIcon from './icons/Slider'

const Tooltip = ({ filterEmail, filterPhone, filterAvailable, setFilterEmail, setFilterPhone, setFilterAvailable }) => {
  const modal = document.getElementById('')
  window.onClick = function (e)  {
    if(e.target === modal) {
      modal.style.display = 'none'
    } else {
      modal.style.display = 'block'}
  }

  return (
    <div className="tooltipContain modal">
      <div className="tooltip">
        <div className="tooltip--av">
          Only availables
          <SliderIcon active={filterAvailable} onClick={() => setFilterAvailable(!filterAvailable)} />
        </div>
        Contact details
        <div className="tooltip--icons">
          <div className="toooltip">
            <MailIcon active={filterEmail} onClick={() => setFilterEmail(!filterEmail)} />
            <span className="tooltiptext">Has email(s)</span>
          </div>
          <div className="toooltip">
            <span className="tooltiptext">Has number(s)</span>
            <PhoneIcon active={filterPhone} onClick={() => setFilterPhone(!filterPhone)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tooltip

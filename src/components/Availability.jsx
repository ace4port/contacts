import React from 'react'

const Availability = ({active = false, ...props}) => {
    return (
        <div className={`availabl ${active && 'active'}`} {...props}>
            
        </div>
    )
}

export default Availability

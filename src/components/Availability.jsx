import React from 'react'

const Availability = ({active = false}) => {
    return (
        <div className={`availabl ${active && 'active'}`}>
            
        </div>
    )
}

export default Availability

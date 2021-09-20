import React from 'react'

const Avatar = ({variant = 'small', label, children}) => {
    return (
        <div className={`avatar ${variant}`}>
            {label || children}
        </div>
    )
}

export default Avatar

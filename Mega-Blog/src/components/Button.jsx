import React from 'react'

function Button({
    children,
    type= 'button',
    bgColor= 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 py-4 rounded-lg ${className} ${textColor} ${bgColor} ${type}`}{...props}>
            {children}
        </button>
    )
}

export default Button

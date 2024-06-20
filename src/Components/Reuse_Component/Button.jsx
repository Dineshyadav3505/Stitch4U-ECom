import React from 'react'

function Button({
    children,
    className= "",
    type = 'button',
    onClick,
    ...props
    
}) {
  return (
    <button className={`px-4 py-2 rounded ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button
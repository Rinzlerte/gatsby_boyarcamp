import React from 'react'

const Input = ({value, onChange}) => {
  return (
    <div className='site-input--wrapper'>
        <input type='text' 
        className='site-input'
        value={value} 
        onChange={onChange} 
        />
    </div>
  )
}

export default Input
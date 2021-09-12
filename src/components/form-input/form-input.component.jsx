import React from 'react';

import './form-input.styles.scss';

export const FormInput = ({ label, handleChange, ...otherInputProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherInputProps} onChange={handleChange}/>
      <label className={`${otherInputProps.value ? 'shrink': ''} form-input-label`}>{label}</label>
    </div>
  )
}

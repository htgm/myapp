import React from 'react';
import './controls.css';

export const ToggleButton = ({className, children}) => {
  return (
    <label className={className}>
      <input type="checkbox" className="controls-hidden"/>
      {children}
    </label>
  )
};

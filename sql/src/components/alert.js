import React from 'react';
import './alert.css';
const Alert = (props) => {
  return (
    <div className="Modal">
      {props.children}
    </div>
  )
}

export default Alert

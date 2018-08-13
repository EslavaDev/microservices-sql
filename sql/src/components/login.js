import React from 'react'
import './login.css';
const Login = (props) => (
    <div className="Login">

      <h1>Login</h1>
        <input 
            type="text" 
            placeholder="ingrese el usuario" 
            name="user" 
            onChange={props.ChangeUser}
            ref={props.InputUser}
            value={props.InputUserValue}
        />
        <input 
        type="password" 
        placeholder="ingrese la constraseña" 
        name="pass" 
        onChange={props.ChangePass}
        ref={props.InputPass}
        value={props.InputPassValue}
        />
        <button 
        ref={props.RefButton}
        onClick={props.handleSubmit}
        >Submit</button>

      
    </div>
  )

export default Login

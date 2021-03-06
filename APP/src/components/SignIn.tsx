import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from '../stores/action'

import './Form.css';

const SignIn: React.FC = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const inputChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setData({...data, [name]: value})
  }

  const submitForm = (event) => {
    event.preventDefault()
    dispatch(userLogin(data))
    setData({
      email: '',
      password: ''
    })
  }

  return (
    <div className="container">
        <div className="c2">
          <form className="signup" onSubmit={(event) => submitForm(event) }>
            <h1 className="signup1">SIGN UP</h1>
            <br /><br /><br /><br />
            <input name="email" type="text" placeholder="Username*" className="input" onChange={ inputChange }/>
            
            <input name="password" type="password" placeholder="Password*" className="input" onChange={ inputChange }/>

            <button className="btn">Sign In</button>
          </form>
      </div>
    </div>
  );
};

export default SignIn;

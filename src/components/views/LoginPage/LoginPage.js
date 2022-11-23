import React, { useState } from 'react'
import './LoginPage.scss'

function LoginPage(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // let body = {
    //   email: Email,
    //   password: Password
    // }

    // dispatch(loginUser(body))
    //   .then(response => {
    //     if (response.payload.loginSuccess) {
    //       navigate('/');
    //     } else {
    //       alert('로그인 실패했습니다')
    //     }
    //   })
  }

  return (
    <div className='login'>
      <div className='container'>
        <form onSubmit={onSubmitHandler}>
          <h1>LOGIN</h1>
          <input
            type='email'
            placeholder='Email'
            value={Email}
            onChange={onEmailHandler}
          />
          <input
            type='password'
            placeholder='Password'
            value={Password}
            onChange={onPasswordHandler}
            autoComplete="off"
          />
          <br />
          <button type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
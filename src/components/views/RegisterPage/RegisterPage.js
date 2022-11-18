import React, { useState } from 'react'
// import { useDispatch } from "react-redux";
// import { registerUser } from "../../../_actions/user_action"
// import { useNavigate } from 'react-router-dom';
import './RegisterPage.scss'

function RegisterPage(props) {

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호가 일치하지 않습니다')
    }

    // let body = {
    //   email: Email,
    //   password: Password,
    //   name: Name
    // }

    // dispatch(registerUser(body))
    //   .then(response => {
    //     if (response.payload.success) {
    //       alert('회원가입 되었습니다.');
    //       navigate("/login");
    //     } else {
    //       alert('회원가입에 실패했습니다.')
    //     }
    //   })
  }


  return (
    <div className='join'>
      <div className='container'>
        <form onSubmit={onSubmitHandler}>
          <h1>SIGN UP</h1>
          <span>회원가입 정보를 입력하세요</span>
          <input type='text' placeholder='Name' value={Name} onChange={onNameHandler} />
          <input type='email' placeholder='Email' value={Email} onChange={onEmailHandler} />
          <input type='password' placeholder='Password' value={Password} onChange={onPasswordHandler} autoComplete="off" />
          <input type='password' placeholder='Confirm Password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} autoComplete="off" />
          <button type='submit' className='signup_btn'>
            SIGN UP
          </button>
        </form>
      </div >
    </div >
  )
}

export default RegisterPage
import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.scss'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function NavBar() {
  // const navigate = useNavigate();

  const onClickHandler = () => {
    // axios.get('/api/users/logout')
    //   .then(response => {
    //     if (response.data.success) {
    //       alert('로그아웃 되었습니다.');
    //       navigate('/');
    //     } else {
    //       alert('로그인 상태가 아닙니다.');
    //     }
    //   })
  }

  return (
    <div className='nav'>
      <div className='top_menu'>
        <Link to='/register'>JOIN</Link>
        <Link to='/login'>LOGIN</Link>
        <button onClick={onClickHandler} className='logout_btn'>
          LOGOUT
        </button>
      </div>

      <div className='bottom_menu'>
        <Link to='/'>HOME</Link>
        <Link to='/notice_board'>NOTICE</Link>
        <Link to='/news_board'>NEWS</Link>
        <Link to='/' state={{ value: true }}>
          PHOTO
        </Link>
      </div>
    </div >
  )
}

export default NavBar
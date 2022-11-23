import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './NavBar.scss'
import { TbMenu2, TbSearch } from "react-icons/tb";

function NavBar() {
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
        {/* <button onClick={onClickHandler} className='logout_btn'>
          LOGOUT
        </button> */}
      </div>

      <ul className='bottom_menu'>
        <li><Link to='/iu_fan_page'>HOME</Link></li>
        <li><Link to='/notice_board'>NOTICE</Link></li>
        <li><Link to='/news_board'>NEWS</Link></li>
        <li><Link to='/iu_fan_page' state={{ value: true }}>
          PHOTO
        </Link></li>
      </ul>


    </div >
  )
}

export default NavBar
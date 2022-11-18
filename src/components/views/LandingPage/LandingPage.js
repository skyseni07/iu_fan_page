import React, { useEffect, useRef } from 'react'
// import { useNavigate } from 'react-router-dom';
import './LandingPage.scss'
import PhotoPage from '../PhotoPage/PhotoPage';
import NewsNav from '../News/NewsNav';
import NoticeNav from '../Notice/NoticeNav';
import { useLocation } from "react-router-dom";

function LandingPage(props) {
  const location = useLocation()
  // const navigate = useNavigate();
  const scrollRef = useRef();

  useEffect(() => {
    if (location.state) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [location.state]);

  return (
    <div className='landing'>
      <div className='new_container'>
        <div className='title'>
          <p>NEW</p>
          <div className="line">
            <hr />
            <div className='rectangle' />
          </div>
        </div>
        <div className='new'>
          <NoticeNav />
          <NewsNav />
        </div>
      </div>

      <div ref={scrollRef}>
        <PhotoPage />
      </div>
    </div>
  )
}

export default LandingPage
import React from 'react'
import './Footer.scss'
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='contact_us'>
          <p className='title'>contact us</p>
          <p>IUCOM@gmail.com</p>
          <p>IU.COM</p>
        </div>
        <div className='official_link'>
          <p className='title'>IU official_link</p>
          <a href='https://www.youtube.com/dlwlrma' target='_blank'>YOUTUBE</a>
          <a href='https://www.vlive.tv/channel/FA895' target='_blank'>V-LIVE</a>
        </div>
        <div className='sns'>
          <p className='title'>SNS</p>
          <div className='sns_icons'>
            <a href='https://www.instagram.com/dlwlrma/' target='_blank'><AiFillInstagram /></a>
            <a href='https://twitter.com/_IUofficial' target='_blank'><AiOutlineTwitter /></a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer
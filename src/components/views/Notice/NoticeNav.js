import React from 'react'
import { Link } from "react-router-dom";
import NoticeData from '../../../data/NoticeData.json'

function Header(props) {
  return <header>
    <h2>
      <Link to='/notice_board'>
        {props.title}
      </Link>
    </h2>
  </header>
}

function Nav(props) {
  const lis = []

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];

    lis.push(
      <li key={t.id}>
        <Link to='/notice_board' state={{ _id: t.id }} id={t.id}>
          {t.title.slice(0, 31)}
        </Link>
      </li >)
  }

  return <nav>
    <ul>
      {lis}
    </ul>
  </nav>
}


const NoticeNav = () => {
  const topics = NoticeData.data

  return (
    <>
      <div className='Notice'>
        <Header title="공지사항" />
        <Nav topics={topics}></Nav>
      </div>
    </>
  )
}

export default NoticeNav
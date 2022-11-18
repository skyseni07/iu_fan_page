import React, { useState } from 'react'
import { Link } from "react-router-dom";
import NewsData from '../../../data/NewsData.json'

function Header(props) {
  return <header>
    <h2>
      <Link to='/news_board'>
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
        <Link to='/news_board' state={{ _id: t.id }} id={t.id}>
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


const NewsNav = () => {
  const topics = NewsData.data

  return (
    <>
      <div className='News'>
        <Header title="뉴스" />
        <Nav topics={topics} />
      </div>
    </>
  )
}

export default NewsNav
import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import './NoticeBoard.scss'
import NoticeData from '../../../data/NoticeData.json'

function BoardList(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <tr key={t.id}>
        <td>{t.id}</td>
        <th>
          <a
            id={t.id}
            href={'/read/' + t.id}
            onClick={e => {
              e.preventDefault();
              props.onChangeMode(Number(e.target.id));
            }}
          >
            {t.title}
          </a>
        </th>
      </tr>
    )
  }

  return <>
    {lis}
  </>
}

function Article(props) {
  return <article >
    <h2>{props.title}</h2>
    {props.body}
  </ article>
}

function Create(props) {
  return <article>
    <form onSubmit={e => {
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      props.onCreate(title, body);
    }}>
      <p>
        <input type="text" name="title" placeholder="제목" />
      </p>
      <p>
        <textarea name='body' placeholder='내용' rows="7" ></textarea>
      </p>
      <p>
        <input type="submit" className='content_btn create_btn' value="Create" />
      </p>
    </form>
  </article>
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return <article>
    <form onSubmit={e => {
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
      </p>
      <p>
        <textarea
          name='body'
          placeholder='body'
          value={body}
          rows="7"
          onChange={e => {
            setBody(e.target.value);
          }}
        ></textarea>
      </p>
      <p>
        <input type="submit" className='content_btn update_btn' value="Update" />
      </p>
    </form>
  </article>
}

function List(props) {
  return <header>
    <a href="#" className='btn list_btn' onClick={(e) => {
      e.preventDefault();
      props.onChangeMode();
    }}>
      {props.title}
    </a>
  </header>
}

const NoticeBoard = (props) => {
  const [mode, setMode] = useState('LIST');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(5);
  const [topics, setTopics] = useState(NoticeData.data);

  const location = useLocation()

  let content = null;
  let contextControl = null;
  if (mode === 'LIST') {
    if (location.state) {
      setMode('READ')
      setId(location.state._id)
    }
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />
    contextControl = (
      <>
        {/* READ 모드일 때 뜨는 UPDATE, DELETE 버튼 */}
        <li>
          <a
            href={'/update/' + id}
            className='btn update_btn'
            onClick={event => {
              event.preventDefault();
              setMode('UPDATE');
            }}>
            Update
          </a>
        </li>
        <li>
          <a className='btn delete_btn' onClick={() => {
            const newTopics = []
            for (let i = 0; i < topics.length; i++) {
              if (topics[i].id !== id) {
                newTopics.push(topics[i]);
              }
            }
            setTopics(newTopics);
            setMode('LIST');
          }}>Delete
          </a>
        </li>
      </>
    );
  } else if (mode === 'CREATE') {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode('READ');
          setId(nextId);
          setNextId(nextId + 1);
        }}
      />
    );
  } else if (mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          const newTopics = [...topics];
          const updatedTopic = { id: id, title: title, body: body };
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updatedTopic;
              break;
            }
          }
          setTopics(newTopics);
          setMode('READ');
        }}
      />
    );
  }

  return (
    <>
      <div className='notice_board'>
        <div className='title'>
          <p>NOTICE</p>
          <div className="line">
            <hr />
            <div className='rectangle' />
          </div>
        </div>

        <div className='board'>
          <div className="container">
            <table className="board-table">
              <thead>
                <tr>
                  <th scope="col" className="th-num">No.</th>
                  <th scope="col" className="th-title">TITLE</th>
                </tr>
              </thead>
              <tbody>
                <BoardList
                  topics={topics}
                  onChangeMode={(_id) => {
                    setMode('READ');
                    setId(_id);
                  }}
                />
              </tbody>
            </table>
          </div>

          <div className='btns'>
            <List
              title="LIST"
              onChangeMode={() => {
                if (location.state) location.state = "";
                setMode('LIST');
              }}
            />
            <ul>
              <li>
                <a href="/create"
                  className='btn create_btn'
                  onClick={e => {
                    e.preventDefault();
                    setMode('CREATE');
                  }}>
                  WRITE
                </a>
              </li>
              {contextControl}
            </ul>
          </div >
        </div>

        <div className='content'>
          {content}
        </div>
      </div >
    </>
  )
}

export default NoticeBoard
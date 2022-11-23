import React from "react";
import './card.scss';
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Modal from 'react-modal';
import { AiFillCloseSquare } from "react-icons/ai";

// 모달창 스타일링
const customStyles = {
  content: {
    // width:'30%',
    // height:'30%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    backgroundColor: '#fff',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '5px'
  },
};

export function Card({ title, itemId, content }: { title: string; itemId: string; content:String }) {
  const visibility = React.useContext(VisibilityContext);
  const visible = visibility.isItemVisible(itemId);

  //모달 
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    <div role="button" tabIndex={0} className="card">
      <div className='frame'>
        <a onClick={e => openModal()}>
          <img
          src={`${process.env.PUBLIC_URL}/assets/${content}`} />
        </a>
        </div>
    </div>
    
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div className='close_btn'>
        <button onClick={closeModal}>
          <AiFillCloseSquare />
        </button>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/${content}`}
        style={{
          width:'100%',
          height:'100%'
      }}/>

    </Modal>
    </>
  );
}

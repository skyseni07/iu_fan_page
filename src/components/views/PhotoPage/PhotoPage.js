import React, { useState } from 'react'
import './PhotoPage.scss'
import ReactDOM from "react-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./card";
import usePreventBodyScroll from "./usePreventBodyScroll";
import "./hideScrollbar.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "열";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () => [
  'photo_1.png',
  'photo_2.png',
  'photo_3.png',
  'photo_4.png',
  'photo_5.png',
  'photo_6.png',
  'photo_7.png',
  'photo_8.png',
  'photo_9.png'
].map((item, index) => ({ id: getId(index), content: item }));



function PhotoPage(props) {
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();


  return (
    <>
      <div className='photo_page'>
        <div className='title'>
          <p>PHOTO</p>
          <div className="line">
            <hr />
            <div className='rectangle' />
          </div>
        </div>

        <div className="photos_area">
          <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
            <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              onWheel={onWheel}
            >
              {items.map(({ id, content }) => (
                <Card
                  title={id}
                  itemId={id}
                  key={id}
                  content={content}
                />
              ))}
            </ScrollMenu>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoPage

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

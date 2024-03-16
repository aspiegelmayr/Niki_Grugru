import React from 'react'
import './App.css'
import headerImg from './assets/headerImages/mainPageHeader.png';
import audioBookCover from './assets/mainPage/audiobook_cover.png';
import { MainPageText } from './text-constants';

function MainPage() {
  return (
    <div className='mainContent'>
      <div><img src={headerImg} className='mainPage__headerimage'></img></div>
      <div className='mainPage__about'>
        <h1>{MainPageText.ABOUT_HEADER_TEXT}</h1>
        <p>{MainPageText.ABOUT_TEXT}</p>
        <br/>
        <h4>{MainPageText.SUBTITLE_AUDIOBOOK}</h4>
        <img src={audioBookCover} className='mainPage__audiobookcover'></img>
      </div>
    </div>
  )
}

export default MainPage;

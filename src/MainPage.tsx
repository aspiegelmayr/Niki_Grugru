import React from 'react'
import './App.css'
import headerImg from './assets/headerImages/headerImage.png';
import audioBookCover from './assets/mainPage/audiobook_cover.png';
import { MainPageText } from './text-constants';

function formatText(text: string){
  return text.split('\n');
}

function MainPage() {
  return (
    <div className='mainContent'>
      <div>
        <img src={headerImg} className='mainPage__headerimage'></img>
        <div className='headerImg__text' style={{top: '20%'}}>Geschichten von <br/> Niki & Grugru</div>
        </div>
      <div className='mainPage__about'>
        <h1 className='mainPage__header'>{MainPageText.ABOUT_HEADER_TEXT}</h1>
        {formatText(MainPageText.ABOUT_TEXT).map((line, index) => (
        <p key={index}>{line}</p>
      ))}
        <br/>
        <h4>{MainPageText.SUBTITLE_AUDIOBOOK}</h4>
        <img src={audioBookCover} className='mainPage__audiobookcover'></img>
      </div>
    </div>
  )
}

export default MainPage;

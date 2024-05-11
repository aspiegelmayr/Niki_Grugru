import React from 'react'
import { ChapterSelectionText } from '../../text-constants';
import chapterSelectionHeader from '../../assets/headerImages/chapterSelectionHeader.png';
import './ChapterSelection.css';
import placeholderImg from '../../assets/mainPage/audiobook_cover.png'

function ChapterSelectionPage() {
  return (
    <div className='mainContent'>
      <div><img src={chapterSelectionHeader} className='mainPage__headerimage'></img></div>
      <div className='chapterSelectPage__about'>
        <h1 className='chapterSelectPage__header'>{ChapterSelectionText.CHAPTER_SELECTION_TITLE}</h1>
        <div className="chapterSelection__container">
          <a href='/chapters/1' className='chapterSelection__button'>
            <p className='greenHeaderText'>Kapitel 1</p>
            <img src={placeholderImg} className='chapterSelection__button__image'></img>
          </a>
          <a href='/chapters/2' className='chapterSelection__button'>
            <p className='greenHeaderText'>Kapitel 2</p>
            <img src={placeholderImg} className='chapterSelection__button__image'></img>
          </a>
          <a href='/chapters/3' className='chapterSelection__button'>
            <p className='greenHeaderText'>Kapitel 3</p>
            <img src={placeholderImg} className='chapterSelection__button__image'></img>
          </a>
          <a href='/chapters/4' className='chapterSelection__button'>
            <p className='greenHeaderText'>Kapitel 4</p>
            <img src={placeholderImg} className='chapterSelection__button__image'></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ChapterSelectionPage;

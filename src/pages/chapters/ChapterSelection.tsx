import React from 'react'
import { ChapterSelectionText } from '../../text-constants';
import chapterSelectionHeader from '../../assets/headerImages/chapterSelectionHeader.png';

function ChapterSelectionPage() {
  return (
    <div className='mainContent'>
      <div><img src={chapterSelectionHeader} className='mainPage__headerimage'></img></div>
      <div className='mainPage__about'>
        <h1>{ChapterSelectionText.CHAPTER_SELECTION_TITLE}</h1>
      </div>
    </div>
  )
}

export default ChapterSelectionPage;

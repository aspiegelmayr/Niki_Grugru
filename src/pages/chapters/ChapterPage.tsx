import React from 'react'
import { ChapterSelectionText } from '../../text-constants';
import chapterSelectionHeader from '../../assets/headerImages/chapterSelectionHeader.png';
import Chapter from './chapter';

interface Props {
    chapter: Chapter;
  }


  function formatText(text: string){
    return text.split('\n');
  }

const ChapterPage: React.FunctionComponent<Props> = (props) => {
  return (
    <div className='mainContent'>
      <div><img src={chapterSelectionHeader} className='mainPage__headerimage'></img></div>
      <div className='mainPage__about'>
        <h1>{props.chapter.aboutPageTitle}</h1>
        {formatText(props.chapter.aboutPageText).map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      </div>
    </div>
  )
}

export default ChapterPage;

import React from 'react'
import chapterSelectionHeader from '../../assets/headerImages/chapterSelectionHeader.png';
import Chapter from './chapter';
import './ChapterPage.css'
import placeholderImg from '../../assets/headerImages/minigamesHeader.png'

interface Props {
  chapter: Chapter;
}


function formatText(text: string) {
  return text.split('\n');
}

const ChapterPage: React.FunctionComponent<Props> = (props) => {
  const chapterNumber = props.chapter.url.split('/')[2];
  const linkToGame = '/games/' + chapterNumber;
  const linkToAnimation = '/videos/' + chapterNumber;
  return (
    <div className='mainContent'>
      <div><img src={chapterSelectionHeader} className='mainPage__headerimage'></img></div>
      <div className='mainPage__about'>
        <h1 className='mainPage__header'>{props.chapter.aboutPageTitle}</h1>
        {formatText(props.chapter.aboutPageText).map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className='animation-game-container'>
        <a className="chapterPage__button greenHeaderText" href={linkToGame}>Game
          <img className='chapterPage__buttonImg' src={placeholderImg}></img>
        </a>
        <a className="chapterPage__button greenHeaderText" href={linkToAnimation}>Video
          <img className='chapterPage__buttonImg' src={placeholderImg}></img>
        </a>
      </div>
    </div>
  )
}

export default ChapterPage;

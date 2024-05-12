import React from 'react';
import Chapter from './chapter';
import './ChapterPage.css'

interface Props {
  chapter: Chapter;
  gameImage: string;
  videoImage: string;
  headerImage: string;
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
      <div><img src={props.headerImage} className='mainPage__headerimage'></img></div>
      <div className='mainPage__about'>
        <h1 className='mainPage__header'>{props.chapter.aboutPageTitle}</h1>
        {formatText(props.chapter.aboutPageText).map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className='animation-game-container'>
        <a className="chapterPage__button greenHeaderText" href={linkToGame}>Game
          <img className='chapterPage__buttonImg' src={props.gameImage}></img>
        </a>
        <a className="chapterPage__button greenHeaderText" href={linkToAnimation}>Video
          <img className='chapterPage__buttonImg' src={props.videoImage}></img>
        </a>
      </div>
    </div>
  )
}

export default ChapterPage;

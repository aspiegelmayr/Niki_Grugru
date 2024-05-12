import React from 'react'
import chapterSelectionHeader from '../../assets/headerImages/chapterSelectionHeader.png';
import './ChapterSelection.css';
import { JSX } from 'react/jsx-runtime';

interface LinkItem {
  linkTo: string;
  title: string;
  linkImage: string;
}

interface Props {
  title: string;
  linkItems?: LinkItem[]
  chapterTitle: string;
  headerImg: string;
}

const OverviewPage: React.FunctionComponent<Props> = (props) => {

  function createLinks() {
    const linkItems: JSX.Element[] = [];
    if(props.linkItems){
      props.linkItems.forEach(element => {
        linkItems.push(
          <a href={element.linkTo} className='chapterPage__button greenHeaderText'>
            {element.title}
            <img src={element.linkImage} className='chapterPage__buttonImg'></img>
          </a>
        )
      });
    }
    return linkItems;
  }

  return (
    <div className='mainContent'>
      <div>
        <img src={props.headerImg} className='mainPage__headerimage'></img>
      </div>
      <div className='chapterSelectPage__about'>
        <h1 className='chapterSelectPage__header'>{props.title}</h1>
        <div className="animation-game-container" style={{maxWidth: "80%"}}>
          {createLinks()}
        </div>
      </div>
    </div>
  )
}

export default OverviewPage;

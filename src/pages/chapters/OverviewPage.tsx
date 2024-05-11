import React from 'react'
import { ChapterSelectionText } from '../../text-constants';
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
  linkItems: LinkItem[]
}

const OverviewPage: React.FunctionComponent<Props> = (props) => {

  function createLinks() {
    const linkItems: JSX.Element[] = [];
    props.linkItems.forEach(element => {
      linkItems.push(
        <a href={element.linkTo} className='chapterSelection__button'>
          <p className='greenHeaderText'>{element.title}</p>
          <img src={element.linkImage} className='chapterSelection__button__image'></img>
        </a>
      )
    });
    return linkItems;
  }

  return (
    <div className='mainContent'>
      <div><img src={chapterSelectionHeader} className='mainPage__headerimage'></img></div>
      <div className='chapterSelectPage__about'>
        <h1 className='chapterSelectPage__header'>{props.title}</h1>
        <div className="chapterSelection__container">
          {createLinks()}
        </div>
      </div>
    </div>
  )
}

export default OverviewPage;

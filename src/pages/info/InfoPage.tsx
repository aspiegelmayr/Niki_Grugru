import React from 'react'
import headerImg from '../../assets/headerImages/mainPageHeader.png';
import './InfoPage.css';
import { JSX } from 'react/jsx-runtime';
import { InfoPageText } from '../../text-constants';


const InfoPage: React.FunctionComponent = () => {

    function formatText(text: string) {
        return text.split('\n');
    }


    return (
        <div className='mainContent'>
            <div>
                <img src={headerImg} className='mainPage__headerimage'></img>
            </div>
            <div className='chapterSelectPage__about'>
                <h1 className='chapterSelectPage__header'>{InfoPageText.TITLE}</h1>
                <div className="infoPage__container">
                    <h3 className='infoTextHeader'>{InfoPageText.HEADER_1}</h3>
                    {formatText(InfoPageText.TEXT_1).map((line, index) => (
                        <p className='infoText' key={index}>{line}</p>
                    ))}
                    <h3 className='infoTextHeader'>{InfoPageText.HEADER_2}</h3>
                    {formatText(InfoPageText.TEXT_2).map((line, index) => (
                        <p className='infoText' key={index}>{line}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InfoPage;

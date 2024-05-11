import React from 'react'
import Chapter from '../chapters/chapter';
import testVid from '../../assets/animations/chapter1.mp4';

interface Props {
    chapter: Chapter;
    animationName: string;
}

const VideoPage: React.FunctionComponent<Props> = (props) => {
    return (

        <video width="100%" height="90%" controls>
            <source src={props.animationName} type="video/mp4" />
            Fehler beim Laden der Animation!
        </video>
    )
}

export default VideoPage;

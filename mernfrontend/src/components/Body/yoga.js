import React, {useEffect} from 'react';
import urlim from './nature1.jpg';

const Yoga=()=>{

    useEffect(()=>{
        document.getElementById('Yoga').style.background = `url(${urlim}) no-repeat center center/cover`;
    });

    return(
        <div id='Yoga'>
            <a href='https://www.youtube.com/watch?v=VFB8DR03GX8' target='_blank' rel="noreferrer">Hair</a>
            <a href='https://www.youtube.com/watch?v=F_3Sji3t-wM' target='_blank' rel="noreferrer">Face</a>
            <a href='https://www.youtube.com/watch?v=WrZGGVe4088' target='_blank' rel="noreferrer">Chest</a>
            <a href='https://www.youtube.com/watch?v=Onj50mJ7e-0' target='_blank' rel="noreferrer">stomach</a>
        </div>
    )
}

export default Yoga;
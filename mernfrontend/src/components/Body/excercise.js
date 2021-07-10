import React, {useEffect} from 'react';
import urlim from './bodybuild3.jpg';
const Excercise=()=>{
    useEffect(()=>{
        document.getElementById('excercise').style.background = `url(${urlim}) no-repeat center center/cover`;
    });
    return(
        <div id='excercise'>
            <a href='https://www.youtube.com/watch?v=mqfzsbV0lUs' target='_blank' rel="noreferrer">Biceps</a>
            <a href='https://www.youtube.com/watch?v=dhGnHk_d6vc' target='_blank' rel="noreferrer">Triceps</a>
            <a href='https://www.youtube.com/watch?v=Irf2OqyXqXw' target='_blank' rel="noreferrer">Abs</a>
            <a href='https://www.youtube.com/watch?v=Nr0voKyfiiE' target='_blank' rel="noreferrer">Legs</a>
        </div>
    )
}

export default Excercise;
import React, {useEffect} from 'react';
import urlim from './food_items1.jpg';
const Nutrients=()=>{
    useEffect(()=>{
        document.getElementById('nutrients').style.background = `url(${urlim}) no-repeat center center/cover`;
    });
    return(
        <div id='nutrients'>
            <a href='https://www.youtube.com/watch?v=gvY8-DGhmtk' target='_blank'rel="noreferrer">Hair</a>
            <a href='https://www.youtube.com/watch?v=lAx5gwhmsdo' target='_blank'rel="noreferrer">Face</a>
            <a href='https://www.youtube.com/watch?v=zr4onA2k_LY' target='_blank'rel="noreferrer">Digestion</a>
            <a href='https://www.youtube.com/watch?v=UMTDmP81mG4' target='_blank'rel="noreferrer">Heart Beat</a>
        </div>
    )
}

export default Nutrients;
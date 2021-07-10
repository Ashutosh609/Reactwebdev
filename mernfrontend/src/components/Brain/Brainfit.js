import React from 'react';
import {Route} from 'react-router-dom';
import Snake from './snake';

const Brainfit = () => {
    return (
        <>
        <Route exact path='/snake'>
            <Snake/>
        </Route>
        </>
    )
};

export default Brainfit;
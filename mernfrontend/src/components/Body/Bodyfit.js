import React from 'react';
import { Route } from 'react-router-dom';
import Yoga from './yoga';
import Excercise from './excercise.js';
import Food from './food';
import Nutrient from './nutrients';

const Bodyfit = () => {
    return (
        <>
            <Route exact path='/yoga'>
                <Yoga />
            </Route>
            <Route exact path='/excercise'>
                <Excercise />
            </Route >
            <Route exact path='/food'>
                <Food />
            </Route >
            <Route exact path='/nutrients'>
                <Nutrient />
            </Route >
        </>
    )
};

export default Bodyfit;
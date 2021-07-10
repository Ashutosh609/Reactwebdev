import React from 'react';
import { Route } from 'react-router-dom';
import BMI from './bmi';
import Fitness from './fitness';
import Flexibility from './flexibility';

const Bodyfit = () => {
    return (
        <>
            <Route exact path='/bmi'>
                <BMI />
            </Route>
            <Route exact path='/fitness'>
                <Fitness />
            </Route >
            <Route exact path='/flexibility'>
                <Flexibility />
            </Route >
        </>
    )
};

export default Bodyfit;
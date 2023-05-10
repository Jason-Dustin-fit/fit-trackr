import React from 'react';
import { Routines, Home, MyRoutines, Activities } from './index';
import { Routes, Route } from 'react-router-dom';

//Routes: Still needs header(includes login/register?)

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/routines' element={<Routines />}/>
                <Route path='/me' element={<MyRoutines />}/>
                <Route path='/activities' element={<Activities />}/>
            </Routes>
        </div>
    )
};

export default Main;

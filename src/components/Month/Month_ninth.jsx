import React from 'react';
import  './Month.modules.css';
import { NavLink } from 'react-router-dom';

const Month_ninth = (props) => {
    return (
        <div className='app-wrapper' >
           <h1 className = 'Prognosys'>Ваш прогноз:</h1>
           <NavLink to='/'><button className = 'back'>Вернуться</button> </NavLink>
           <div className='app-wrapper-content'>
           </div>
       </div>
       )
}

export default Month_ninth;
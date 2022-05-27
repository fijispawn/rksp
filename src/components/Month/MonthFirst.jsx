import React from 'react';
import axios from 'axios';
import  './MonthFirst.modules.css';
import { NavLink } from 'react-router-dom';
//import {useRouteMatch} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

const MonthFirst = (props) => {
//const { url } = useRouteMatch();
//const idArr = url.split('/');
//const id= idArr[idArr.length - 1];
  let { id } = useParams();
  console.log('id:', id)
const [data, setData] = useState('')
useEffect(() => {
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/prognosis/'
        })
        instance.get(`2`).then(response => {
            setData(response.data);
            })
}, 
[]);
    return (
     <div className='app-wrapper' >
        <h1 className = 'Prognosys'>Ваш прогноз:</h1>
        <NavLink to='/'><button className = 'back'>Вернуться</button> </NavLink>   
        <div className='app-wrapper-content'>
        </div>
    </div>
    )
}

export  default MonthFirst;

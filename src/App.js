import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MonthFirst from './components/Month/MonthFirst';


const HomePage = (props) => {
    return (
     <div className='app-wrapper' >
        <Header />
        <Navbar />
    </div>
    )
} 
const App = (props) => {

    return <BrowserRouter>
                <Routes>
                <Route path='/'
                        element={<HomePage />} />

                    <Route exact path='/:id'
                        element={<MonthFirst  />} />
                   
                </Routes>
    </BrowserRouter>
}

export default App;

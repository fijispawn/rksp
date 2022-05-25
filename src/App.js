import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Month_first from './components/Month/Month_first';
import Month_second from './components/Month/Month_second';
import Month_third from './components/Month/Month_third';
import Month_fourth from './components/Month/Month_fourth';
import Month_fifth from './components/Month/Month_fifth';
import Month_sixths from './components/Month/Month_sixths';
import Month_sevenths from './components/Month/Month_sevenths';
import Month_eightths from './components/Month/Month_eightths';
import Month_ninth from './components/Month/Month_ninth';
import Month_tenth from './components/Month/Month_tenth';
import Month_eleventh from './components/Month/Month_eleventh';
import Month_twelveth from './components/Month/Month_twelveth';


const HomePage = (props) => {
    return (
     <div className='app-wrapper' >
        <Header />
        <Navbar />
    </div>
    )
}

// const ProfilePage = (props) => {
//     return (
//      <div className='app-wrapper' >
//         <Header />
//         <Navbar />
//         <div className='app-wrapper-content'>
//              <Profile  />
//         </div>
//     </div>
//     )
// }

const App = (props) => {

    return <BrowserRouter>
                <Routes>
                <Route path='/'
                        element={<HomePage />} />

                    <Route exact path='/1'
                        element={<Month_first  />} />

                    <Route exact path='/2/*'
                        element={<Month_second />} />

                         <Route exact path='/3/*'
                        element={<Month_third />} />

                         <Route exact path='/4/*'
                        element={<Month_fourth />} />

                        <Route exact path='/5/*'
                        element={<Month_fifth  />} />

                    <Route exact path='/6/*'
                        element={<Month_sixths />} />

                         <Route exact path='/7/*'
                        element={<Month_sevenths />} />

                         <Route exact path='/8/*'
                        element={<Month_eightths />} />

                        <Route exact path='/9/*'
                        element={<Month_ninth  />} />

                    <Route exact path='/10/*'
                        element={<Month_tenth />} />

                         <Route exact path='/11/*'
                        element={<Month_eleventh />} />

                         <Route exact path='/12/*'
                        element={<Month_twelveth />} />
                        
                                    
                                    
                   
                </Routes>
    </BrowserRouter>
}

export default App;
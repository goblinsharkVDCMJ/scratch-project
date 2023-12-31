import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ActForm from './pages/Form';
import Signup from './pages/Singup';

export default function App() {
  return (
    <BrowserRouter>
      <h1>Hi friend!</h1>
      <div className='links'>
        <NavLink to='/'>login</NavLink>
        <NavLink to='/signup'>signup</NavLink>
        <NavLink to='/home'>home</NavLink>
        <NavLink to='/form'>create new event</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<ActForm />} />
      </Routes>
    </BrowserRouter>
  );
}

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

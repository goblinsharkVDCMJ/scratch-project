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
      <div>Hello</div>
      <div>
        <NavLink to='/'>login</NavLink>
        <NavLink to='/signup'>singup</NavLink>
        <NavLink to='/home'>home</NavLink>
        <NavLink to='/form'>form</NavLink>
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

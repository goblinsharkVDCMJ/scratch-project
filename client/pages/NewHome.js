import React from 'react';
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';
const NewHome = () => {
  return (
    <div>
      <Link to='/form'>
        <button>Create new activity</button>
      </Link>
      <hr></hr>
      <h1>Home</h1>
    </div>
  );
};

export default NewHome;

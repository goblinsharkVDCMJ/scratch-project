import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import MainCointainer from '../Cointainer/MainCointainer';
import Card from '../components/Card';

const Home = () => {
  const arr = [];

  const pushCards = (arg) => {
    arr.push(<Card />);
  };

  useEffect() => {
    setInterval(() => {}, 3000)
  }
  setInterval(() => {useEffect( async () => {
    const dbArr = await fetch('/api/db/getActivities');
    pushCards(dbArr);
  })}, 3000)

  return (
    <div>
      <Link to='/form'>
        <button>Create new activity</button>
      </Link>
      <hr></hr>
      <h1>Home</h1>
      <div>{arr}</div>
    </div>
  );
};

export default Home;

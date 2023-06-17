import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import MainCointainer from '../Cointainer/MainCointainer';
import Card from '../components/Card';

const Home = () => {
  const [activites, setActivites] = useState([]);

  const arr = [];

  useEffect(async () => {
    const data = await fetch('/api/db/getActivities');
    const dbData = await data.json();
    setActivites(dbData);

    // console.log('we are looking at dbData', dbData);
  }, []);

  const pushCards = () => {
    activites.forEach((element) => {
      arr.push(<Card />);
    });
  };

  return (
    <div>
      <Link to='/form'>
        <button>Create new activity</button>
      </Link>
      <h1>Home</h1>
      {activites.map((activity) => {
        return (
          <>
            <Card
              activityName={activity.activityName}
              currentCount={activity.currentCount}
              requiredCount={activity.requiredCount}
              owner={activity.owner}
            />
            {/* <div>{activity.activityName}</div>
            <div>{activity.currentCount}</div>
            <div>{activity.requiredCount}</div>
            <div>{activity.owner}</div> */}
          </>
        );
      })}
    </div>
  );
};

export default Home;

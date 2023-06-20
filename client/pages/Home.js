import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import MainCointainer from ‘../Cointainer/MainCointainer’;
import Card from "../components/Card";
const Home = () => {
  const [activites, setActivites] = useState([]);
  const arr = [];
  useEffect(() => {
    fecthData();
    // console.log(‘we are looking at dbData’, dbData);
  }, []);

  async function fecthData() {
    const data = await fetch("/api/homePage/getActivities");
    const dbData = await data.json();
    setActivites(dbData);
  }
  const pushCards = () => {
    activites.forEach((element) => {
      arr.push(<Card />);
    });
  };
  return (
    <div className="allBoxes"> 
    <div>
      <Link to='/form'>
        {/* <button>Create new activity</button> */}
      </Link>
      {/* <h1>Home</h1> */}
      {activites.map((activity, index) => {
        return (
          <>
            <Card
              key={index}
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
    </div>
  );
};
export default Home;

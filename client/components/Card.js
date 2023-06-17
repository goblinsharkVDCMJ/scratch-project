import React from "react";
const Card = ({ activityName, currentCount, requiredCount, owner }) => {
  return (
    <div className="activityCard">
    <div className='Card'>
      <h2>{activityName}</h2>
      <hr></hr>
      <h3>Created by: {owner}</h3>
      <ul>
        <li>Count: {currentCount}</li>
        <li>Required participants: {requiredCount}</li>
      </ul>
      <button>Join</button>
    </div>
    </div>
  );
};
export default Card;

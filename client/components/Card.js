import React from 'react';

const Card = ({ activityName, currentCount, requiredCount, owner }) => {
  return (
    <div className='Card'>
      <h1>{activityName}</h1>
      <h2>Created by: {owner}</h2>
      <ul>
        <li>Count: {currentCount}</li>
        <li>Required participants: {requiredCount}</li>
      </ul>
      <button>Join</button>
    </div>
  );
};

export default Card;

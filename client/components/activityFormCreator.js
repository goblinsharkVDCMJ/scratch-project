import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

const ActivityCreator = () => {
  //activityName, count, owner, userId
  const makeActivity = async (e) => {
    e.preventDefault();
    console.log("amke");
    let event = {};

    const result = await fetch("../api/");
  };

  return (
    <div>
      {/* <p>form</p> */}
      <form action=''>
        <span>
          <label htmlFor='lname'>Event description: </label>
          <input type='text' id='lname' name='lname' />
          <br />
        </span>
        <br />
        <span>
          <label htmlFor='lreq'>People Requirement: </label>
          <input type='number' id='peopleReq' name='number' />
          <br />
        </span>
        <br />
        <button onClick={makeActivity}>Make Event</button>
      </form>
    </div>
  );
};
export default ActivityCreator;

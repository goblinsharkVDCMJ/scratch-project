import React, { Component } from "react";
import { NavLink } from "react-router-dom";
const ActForm = () => {
  const makeActivity = async (e) => {
    const desc = document.getElementById("lname").value;
    const number = document.getElementById("peopleReq").value;
    e.preventDefault();
    console.log("make", desc);
    let event = {
      activityName: desc,
      requiredCount: number,
      owner: "12345",
      userID: "648dce46018114fa3d7856af7",
    };

    fetch("../api/homePage/postActivity", {
      method: "POST",
      body: JSON.stringify(event),
      headers: { "Content-Type": "application/json" },
    }).catch((err) => console.log("create event error: ", err));
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

export default ActForm;

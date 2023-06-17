import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
const Login = () => {
  const login = async (e) => {
    e.preventDefault();
    console.log("click");
    const user = document.getElementById("usernameL").value;
    const password = document.getElementById("passwordL").value;
    let info = {
      name: user,
      password: password,
    };
    console.log(info);
    fetch("../api/homePage/authenticateUser", {
      method: "POST",
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      {/* <p>hello</p> */}
      <form action=''>
        <span>
          <label>User: </label>
          <input type='text' id='usernameL' name='lname' />
          <br />
        </span>
        <br />
        <span>
          <label>Password: </label>
          <input type='text' id='passwordL' name='number' />
          <br />
        </span>
        <br />
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default Login;

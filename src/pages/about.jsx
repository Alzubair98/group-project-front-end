/* eslint-disable */
import React from "react";

function About(props) {
  return (
    <div>
      <h1>about page</h1>
      {console.log(props.data)}
      <h1>{props.loggedInStatus}</h1>
      <button onClick={props.handleLogin}>login</button>
    </div>
  );
}

export default About;

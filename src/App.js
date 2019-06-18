import React, { Component, useState } from "react";
import Tweet from "./tweet";
class App extends Component {
  increment = () => {
    setLikes(likes + 1);
  };
  render() {
    return (
      <div className="app">
        <h1>Tweets </h1>
        <Tweet
          name="Rahi Javaid"
          message="This my random tweet!"
          likes="700k"
        />
        <Tweet
          name="John Snow"
          message="Jhon is neither stark nor bastard but true targerian!"
          likes="40M"
        />
        <Tweet
          name="Mosh Hamedani"
          message="My new course is available over udemy hurry and enroll!"
          likes="70k"
        />
        <Tweet
          name="Maximillian"
          message="Angular 7 course biggner to advanced!"
          likes="48k"
        />
      </div>
    );
  }
}

export default App;

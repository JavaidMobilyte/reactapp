import React, { Component } from "react";
import "./App.css";
class Tweet extends Component {
  state = {};

  render() {
    const { name, message, likes } = this.props;
    return (
      <div className="tweet">
        <h3>{name}</h3>
        <p>{message}</p>
        <h3>{likes}</h3>
        <button className="btn btn-primary btn-lg">Tweeet</button>
      </div>
    );
  }
}

export default Tweet;

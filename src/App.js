
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog} className="App-logo" width='40%' height='400px'/>
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">click for watching dogs Gallery</p>
        )}

        {fetching ? (
          <button className="btn btn-danger" disabled>&nbsp;&nbsp;&nbsp;Fetching.....&nbsp;&nbsp;&nbsp;</button>
        ) : (
          <button className="btn btn-success" onClick={onRequestDog}>Request a Dog</button>
        )}

        {error ? <p style={{ color: "red" }}>Uh oh - something went wrong!</p>:<p></p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    communitieslist: [],
    bankaccountslist: []
  }

  componentDidMount() {
    fetch('/communities')
      .then(res => res.json())
      .then(communitieslist => this.setState({ communitieslist }));
  }
  

  render() {
    return (
      <div className="App">
        <h1>communities</h1>
        {this.state.communitieslist}
      </div>
    );
  }
}

export default App;

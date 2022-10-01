import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ''}
  }

  callAPI() {
    fetch("http://localhost:3000/hello")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
        return (<div className="App">
          <Button color="primary" variant="contained"> Press me </Button>
          <TextField id="name" label="Name" variant="outlined"/>
          <p className="Api-call">{this.state.apiResponse}</p>
        </div>
        )
  }
}

export default App;

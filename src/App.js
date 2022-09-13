import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import QuoteBlock from './components/QuoteBlock';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <QuoteBlock />
      </div>
    );
  }
}

export default App;

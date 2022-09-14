import React, { Component } from "react";
import './App.css';
import QuoteBlock from './components/QuoteBlock';
import $ from 'jquery';
import API_KEY from "./apikey";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes',
      headers: { 'X-Api-Key': API_KEY },
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          data: data[0]
        })
      },
      error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
      }
    });

  }

  render() {
    return (
      <div className="App">
        <QuoteBlock apiData={this.state.data} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import './App.css';
import QuoteBlock from './components/QuoteBlock';
import $ from 'jquery';
import API_KEY from "./apikey";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isToggleOn: true,
      loading: true
    }
    this.apiCall = this.apiCall.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Fetch data from API
  apiCall() {
    this.setState({
      loading: true
    })
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes',
      headers: { 'X-Api-Key': API_KEY },
      contentType: 'application/json',
      success: (data) => {
        if (data[0].quote.length < 100) {
          this.setState({
            data: data[0],
            loading: false
          })
        }
        else {
          this.apiCall();
        }
      },
      error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
      }
    });
  }

  // Run API call after initial render
  componentDidMount() {
    this.apiCall();
  }

  // Run API call after button is clicked
  handleClick() {
    this.apiCall();
  }

  render() {
    return (
      <div className="App">
        <QuoteBlock
          apiData={this.state.data}
          loading={this.state.loading}
          handleClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default App;

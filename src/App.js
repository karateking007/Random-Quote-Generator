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
      loading: true,
      twitterLink: '',
      bgColor: `rgb(255, 0, 255)`
    }
    this.apiCall = this.apiCall.bind(this);
    this.newQuote = this.newQuote.bind(this);
    this.changeColors = this.changeColors.bind(this);
    this.updateTwitter = this.updateTwitter.bind(this);
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
          this.changeColors();
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
  newQuote() {
    this.apiCall();
    this.changeColors();
  }

  // Update Twitter Link
  updateTwitter() {
    this.setState(
      {
        twitterLink: `https://twitter.com/intent/tweet?text=` + this.state.data.quote + ` - ${this.state.data.author}`
      });
  }

  // Change background color
  changeColors() {
    var originalArray = [1, 1, 1];
    var newArr = originalArray.map((num) => {
      return Math.floor(Math.random(num) * 180);
    });
    this.setState({
      bgColor: `rgb(${[...newArr]})`
    })
  }

  render() {
    return (
      <div className="App">
        <QuoteBlock
          apiData={this.state.data}
          loading={this.state.loading}
          newQuote={this.newQuote.bind(this)}
          updateTwitter={this.updateTwitter.bind(this)}
          twitterLink={this.state.twitterLink}
          bgColor={this.state.bgColor} />
      </div>
    );
  }
}

export default App;

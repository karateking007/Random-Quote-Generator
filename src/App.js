import React, { useState, useEffect } from 'react';
import './App.css';
import QuoteBlock from './components/QuoteBlock';
import $ from 'jquery';
import { API_KEY } from './apikey';

const App = () => {
  const [data, setData] = useState(() => null);
  const [loading, setLoading] = useState(() => true);
  const [twitterLink, setTwitterLink] = useState(() => '');
  const [bgColor, setBgColor] = useState(() => `rgb(255, 0, 255)`);

  // Fetch data from API
  const apiCall = _ => {
    setLoading(true);
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes',
      headers: { 'X-Api-Key': API_KEY },
      contentType: 'application/json',
      success: (data) => {
        if (data[0].quote.length < 100) {
          changeColors();
          setData(data[0]);
          setLoading(false);
        }
        else {
          apiCall();
        }
      },
      error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
      }
    });
  }

  // Run API call after initial render
  useEffect(() => {
    apiCall();
  }, [])

  // Run API call after button is clicked
  const newQuote = _ => {
    apiCall();
    changeColors();
  }

  // Update Twitter Link
  const updateTwitter = _ => {
    setTwitterLink(`https://twitter.com/intent/tweet?text=` + data.quote + ` - ${data.author}`)
  }

  // Change background color
  const changeColors = _ => {
    var originalArray = [1, 1, 1];
    var newArr = originalArray.map((num) => {
      return Math.floor(Math.random(num) * 180);
    });
    setBgColor(`rgb(${[...newArr]})`)
  }

  return (
    <div className="App">
      <QuoteBlock
        apiData={data}
        loading={loading}
        newQuote={() => newQuote()}
        updateTwitter={() => updateTwitter()}
        twitterLink={twitterLink}
        bgColor={bgColor} />
    </div>
  );
}

export default App
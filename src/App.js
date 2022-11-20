import React, { useEffect } from 'react';
import './App.css';
import QuoteBlock from './components/QuoteBlock';
import $ from 'jquery';
import { API_KEY } from './apikey';
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, setData, setBgColor, setTwitterLink } from './redux/appSlice'

const App = () => {
  const loading = useSelector((state) => state.loading);
  const { data } = useSelector((state) => state.data);
  const bgColor = useSelector((state) => state.bgColor);
  const dispatch = useDispatch();

  // Fetch data from API
  const apiCall = _ => {
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes',
      headers: { 'X-Api-Key': API_KEY },
      contentType: 'application/json',
      success: (data) => {
        if (data[0].quote.length < 100) {
          dispatch(setBgColor());
          dispatch(setData(data[0]));
          dispatch(setLoading(false));
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
    dispatch(setLoading(true));
    apiCall();
  }, [])

  // Run API call after button is clicked
  const newQuote = _ => {
    dispatch(setLoading(true));
    apiCall();
    dispatch(setBgColor());
  }

  return (
    <div className="App">
      <QuoteBlock
        data={data}
        loading={loading}
        newQuote={() => newQuote()}
        bgColor={bgColor}
      />
    </div>
  );
}

export default App
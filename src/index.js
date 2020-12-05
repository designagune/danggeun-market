import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import rootReducer from './modules';
import ResetStyles from './resetStyle/ResetStyles';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <>
    <ResetStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root'),
);

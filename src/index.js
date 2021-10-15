import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App.js';
import reducer, { initialState } from './reducer.js';
import { StateProvider } from './stateProvider.js';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
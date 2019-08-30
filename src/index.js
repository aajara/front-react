import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import App from './components/App'

let color = {
    background: "#d9e3f0"
  };

ReactDOM.render(<body style = {color}><App/></body>, document.getElementById('root'));
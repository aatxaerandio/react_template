import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Bootstrap</h2>
        <div>
          {moment().format('MMMM Do YYYY, hh:mm:ss a')}
        </div>
      </div>
    );
  }
}

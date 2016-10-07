import React, { Component } from 'react';
import { render } from 'react-dom';

var ReactUI = require('rctui')

export default class Index extends Component {
  constructor(props) {
    super(props);
   }
   
  render() {
    return (
      <div className="namespace">
        <h2>namespace</h2>
        <hr/>
      </div>      
    );
  }
}
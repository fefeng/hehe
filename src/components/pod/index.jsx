import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
     return (
       <div>
         <h2>pod</h2>
        <div>{this.props.params.id}</div> 
        <hr/>
      </div>
    );
  }
}
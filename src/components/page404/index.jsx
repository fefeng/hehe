import React, { Component } from 'react';
import { render } from 'react-dom';

import { Link } from 'react-router';
import './index.scss';
var ReactUI = require('rctui')

export default class Index extends Component {
  constructor(props) {
    super(props);
   }
   
  render() {
    return (
      <div className="page-404">
        <h1>抱歉，没有找到该页面</h1>
        <hr/>
        <Link className="btn btn-default" to={`/`} >返回主页</Link>
      </div>
    );
  }
}
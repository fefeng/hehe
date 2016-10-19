import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.scss';

class Index extends Component {

  constructor(props, context) {
    super(props, context);
    this.context.router;
  }

  onClick() {
    this.context.router.push('/');
  }

  render() {
    return (
      <div className="page-404">
        <h1>抱歉，没有找到该页面</h1>
        <hr />
        <button className="btn btn-default" onClick={() => { this.onClick(); } }>返回</button>
        <Link className="btn btn-default" to={'/'} >返回主页</Link>
      </div>
    );
  }
}

Index.contextTypes = {
  router: Object
};

export default Index;
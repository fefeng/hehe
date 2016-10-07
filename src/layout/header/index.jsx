import React, { Component } from 'react';
import { render } from 'react-dom';
import nameSpaceModel from '../../model/namespace';
import "./index.scss";

import { doFilter, lengthMenu,namespace } from '../../actions';

var Select = require('rctui/Select');

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {nameSpaceList :[]};
    // nameSpaceModel.getNameSpaces().then(data=>{
    //   let npList = data.items.map(item=>{
    //     return item.metadata.name;
    //   });
    //   this.setState({nameSpaceList:["all"].concat(npList)});
    // });
  }
  
  npOnChange(value) {    
    this.props.dispatch(doFilter(value));
  }
  
  render() {
    // let data = this.state.nameSpaceList;
    let data = ["all","default","kube-system"];
    return (
      <header className="header">
        <div className="right">
          <Select className="np-select"
            grid={{ width: 5 / 10 }}
            placeholder="请选择namespace"
            data={data}
            value="all"
            onChange={value => this.npOnChange(value)}
            />
        </div>
      </header>
    );
  }
}
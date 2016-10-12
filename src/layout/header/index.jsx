import React, { Component } from 'react';
import { render } from 'react-dom';
import nameSpaceModel from '../../model/namespace';
import "./index.scss";

import history from 'history'

import {changeNamespace } from '../../actions';

var Select = require('rctui/Select');

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {nameSpaceList :[]};
    nameSpaceModel.getNamespaces().then(data=>{
      let npList = data.items.map(item=>{
        return item.metadata.name;
      });
      this.setState({nameSpaceList:["all"].concat(npList)});
    });
  }

  npOnChange(value) {
    let oldNamespace = nameSpaceModel.getcurrentNamespace();
    if (value !== oldNamespace) { 
      nameSpaceModel.changeNamespaces(value);
      this.props.dispatch(changeNamespace(value));
      location.pathname = location.pathname.replace("/" + oldNamespace + "/", "/" + value + "/");
    }
  }
  
  render() {
    let data = this.state.nameSpaceList;
    return (
      <header className="header">
        <div className="right">
          <Select className="np-select"
            grid={{ width: 5 / 10 }}
            placeholder="请选择namespace"
            data={data}
            value={nameSpaceModel.getcurrentNamespace()}
            onChange={value => this.npOnChange(value)}/>
        </div>
      </header>
    );
  }
}
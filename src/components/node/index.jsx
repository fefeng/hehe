import React, { Component } from 'react';
import { render } from 'react-dom';
import Node from './node';
import NodeModel from "../../model/node";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.nodeData();
    this.state = { nodeList: [] };   
  }

  nodeData() {
    let then = this;
    NodeModel.getNodes().then(data => {
      then.setState({ nodeList: data.items });
    });
  }

  render() {
    let data = this.state.nodeList;    
    return (
      <div>
        <h2>nodes</h2>
        <div>{this.props.params.id}</div>
        <hr/>
        <ul>
          {
            data.map((item, i) => {
              return <Node key={i} nodeInfo={item} />
            })
          }
        </ul>
      </div>
    );
  }
}
import React, { Component } from 'react';
import { render } from 'react-dom';

import "./index.scss";

export default class Node extends Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    let nodeInfo = this.props.nodeInfo;
    return (
      <div className="host">
        <div className="host-item">hostName:{nodeInfo.spec.externalID}</div>
        <div className="host-item">os:{nodeInfo.status.nodeInfo.osImage}</div>
        <div className="host-item">cpu:{nodeInfo.status.capacity.cpu}</div>
        <div className="host-item">memory:{nodeInfo.status.capacity.memory}</div>
      </div>
    );
  }
}
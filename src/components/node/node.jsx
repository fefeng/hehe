import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navigation } from "react-router";
import reactMixin from 'react-mixin';

import "./index.scss";

import Common from "../../common";




export default class Node extends Component {
  constructor(props) {
    super(props);
  }

  onClick() { 
     this.props.history.replaceState(null, '/about');
  }
  
  render() {
    let nodeInfo = this.props.nodeInfo;
    return (
      <div className="host">
        <div className="host-item"><span className="title">主机名: </span>{nodeInfo.spec.externalID}</div>
        <div className="host-item"><span className="title">IP: </span>{nodeInfo.status.addresses[0].address}</div>
        <div className="host-item"><span className="title">系统: </span>{nodeInfo.status.nodeInfo.osImage}</div>
        <div className="host-item"><span className="title">cpu: </span>{nodeInfo.status.capacity.cpu}</div>
        <div className="host-item"><span className="title">内存: </span>{Common.formatToMb(nodeInfo.status.capacity.memory.replace("Ki", "")) }</div>
        <div className="host-item"><span className="title">Pod最大数: </span>{nodeInfo.status.allocatable.pods}</div>

        
        
        <div className="host-item"><span className="title">Pod当前数: </span>
          {this.props.podSet[nodeInfo.status.addresses[0].address]}
        </div>
        <div className="host-item">
          <span className="title">标签 </span>
          {
            Object.keys(nodeInfo.metadata.labels).map((item, i) => {
              let label = nodeInfo.metadata.labels;
              let text = item + ": " + label[item];
              return <span className="label" key={i} title={text}>{text} </span>
            })
          }
        </div>
      </div>
    );
  }
}
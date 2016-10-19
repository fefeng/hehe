import React, { Component } from 'react';
import { render } from 'react-dom';
import Node from './node';
import NodeModel from "../../model/node";
import podModel from "../../model/pods";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.nodeData();
    this.getPodData();
    this.state = { nodeList: [], podSet: {} };
  }
  
  nodeData() {
    let then = this;
    NodeModel.getNodes().then(data => {
      then.setState({ nodeList: data.items });
    });
  }

  getPodData() {
    podModel.getPods().then(data => {
      let podSet = {};
      data.items.map(item => {
        let hostIP = item.status.hostIP;
        if (podSet[hostIP]) {
          podSet[hostIP] = podSet[hostIP] + 1;
        } else {
          podSet[hostIP] = 1;
        }
      })
      this.setState({ podSet });
    });
  }

  render() {
    let data = this.state.nodeList;
    return (
      <div>
        <h2>nodes</h2>
        <hr />
        <section>
          {
            data.map((item, i) => {
              return <Node key={i} podSet={this.state.podSet} nodeInfo={item} />
            })
          }
        </section>
      </div>
    );
  }
}
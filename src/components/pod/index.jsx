import React, { Component } from 'react';
import { render } from 'react-dom';

import PodsModel from '../../model/pods';
import "./index.scss";

var Table = require('rctui/Table');
var Pagination = require('rctui/Pagination');

export default class Index extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let namesapce = this.props.params.nsid;
    return (
      <div className="pods">
        <h2>pod</h2>
        <hr/>
        <PodTable namesapce={namesapce} />
      </div>
    );
  }
}

class PodTable extends Component {
  constructor(props) {
    super(props);
    this.state = { podList: [] };
    this.getPods();
  }

  getPods() {
    let namesapce = this.props.namesapce;
    let then = this;
    PodsModel.getPods(namesapce === "all" ? "" : namesapce).then(data => {
      let pods = data.items.map((d) => {
        return {
          nodeName: d.spec.nodeName,
          namespace: d.metadata.namespace,
          name: d.metadata.name,
          status: d.status.phase,
          Restarts: d.status.containerStatuses[0].restartCount,
          PodIP: d.status.podIP || "",
          Port: d.spec.containers[0] || "",
          labels: d.metadata.labels
        }
      });
      then.setState({ podList: pods })
    });
  }

  render() {
    return <Table
      bordered={true}
      data={this.state.podList}
      pagination={<Pagination className="pagination" size={20} total={this.state.podList.length} />}
      headers={[
        { name: 'nodeName', header: 'nodeName', sortAble: true },
        { name: 'namespace', header: 'namespace', sortAble: true },
        { name: 'name', header: 'name', sortAble: true },
        { name: 'status', header: 'status', sortAble: true },
        { name: 'Restarts', header: 'Restarts', sortAble: true },
        { name: 'PodIP', header: 'PodIP', sortAble: true },
        {
          name: 'Port', header: 'Port', content: (d) => {
            if (d.Port && d.Port.ports) {
              let ports = d.Port.ports[0];
              let portsText = "";
              if (ports.containerPort) {
                portsText += " containerPort:" + ports.containerPort;
              }
              if (ports.hostPort) {
                portsText += " hostPort:" + ports.hostPort;
              }
              return portsText;
            } else {
              return "";
            }
          }
        },
        {
          name: 'labels', header: 'labels', content: (d) => {
            let labels = d.labels
            let labelText = Object.keys(labels).map((item, i) => {
              return <span key={i} className="k8s-label">{item}{labels[item]}</span>;
            });
            return labelText;
          }
        }
      ]} />
  }
}
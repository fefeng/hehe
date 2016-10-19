import React, { Component } from 'react';
import { render } from 'react-dom';
import ServiceModel from "../../model/services";

import './service.scss';
var Table = require('rctui/Table');
var Pagination = require('rctui/Pagination');

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { serviceList: [] };
    this.getServicesData();
  }

  getServicesData() {
    let namespace = this.props.params.nsid;
    ServiceModel.getServices(namespace).then(data => {
      let serviceList = data.items.map((item, i) => {
        return {
          name: item.metadata.name,
          labels: item.metadata.labels,
          clusterIP: item.spec.clusterIP,
          ports: item.spec.ports,
          targetPort: item.spec.ports,
          nodePort: item.spec.ports
        }
      });
      this.setState({ serviceList });
    });
  }


  render() {

    return (
      <div className="service">
        <Table
          bordered={true}
          data={this.state.serviceList}
          pagination={<Pagination className="pagination" size={20} total={this.state.serviceList.length} />}
          headers={[
            { name: 'name', header: 'name', sortAble: true },
            {
              name: 'labels', header: 'labels', sortAble: true, content: (d) => {
                return Object.keys(d.labels).map((label, i) => {
                  return <span className="k8s-label" key={i}>{label}:{d.labels[label]}</span>
                })
              }
            },
            { name: 'clusterIP', header: 'ClusterIP', sortAble: true },
            {
              name: 'ports', header: 'port', sortAble: true, content: (d) => {
                if (d.ports) {
                  return d.ports[0].port;
                }
              }
            },
            {
              name: 'targetPort', header: 'targetPort', sortAble: true, content: (d) => {
                if (d.ports) {
                  return d.ports[0].targetPort;
                }
              }
            },
            {
              name: 'nodePort', header: 'nodePort', sortAble: true, content: (d) => {
                return d.ports[0].nodePort;
              }
            },
          ]} />
      </div>
    );
  }
}
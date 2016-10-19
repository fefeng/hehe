import React, { Component } from 'react';

import ServiceItem from './service';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>service</h2>
        <hr />
        <ServiceItem {...this.props} />
      </div>
    );
  }
}

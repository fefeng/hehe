import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from "./header";

import { Router, Route, Link, hashHistory, browserHistory} from 'react-router';

import { connect } from 'react-redux';
import { doFilter, lengthMenu, namespace } from '../actions';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let namespace = this.props.operation.FILTER || "default";

        return (
            <div>
                <Header {...this.props}/>
                <nav>
                    <ul className="list-unstyled">
                        <li><Link to={`/namespace/${namespace}/node`} params={{ id: "hello" }}>Nodes</Link></li>
                        <li><Link to={`/namespace/${namespace}/service`} params={{ id: "hello" }}>Service</Link></li>
                        <li><Link to={`/namespace/${namespace}/replica`} params={{ id: "hello" }}>replica</Link></li>
                        <li><Link to={`/namespace/${namespace}/pod`} params={{ id: "hello" }}>pod</Link></li>
                        <li><Link to={`/namespace/${namespace}/volume`} params={{ id: "hello" }}>volume</Link></li>
                    </ul>
                </nav>
                <main>
                    <div>{this.props.children}</div>
                </main>
            </div>
        );
    }
}

function select(state) {
    return {
        operation: state.operation
    };
}

export default connect(select)(Index);
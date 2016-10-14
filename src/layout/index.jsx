import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from "./header";

import { Route, Link } from 'react-router';

import { connect } from 'react-redux';
import { namespace } from '../actions';

import nameSpaceModel from '../model/namespace';
import Page404 from '../components/page404';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
        }
    }

    getMenuList(value) {
        let menus = {
            node: [],
            service: [],
            replica: [
                { icon: "replica1", text: "Deployments", path: "dep" },
                { icon: "replica2", text: "Replica Sets", path: "rs" },
                { icon: "replica3", text: "Replication Controllers", path: "rc" }
            ],
            pod: [],
            volume: []
        }
        return value ? menus[value] : menus;
    }

    liOnMouseEnter(value, e) {
        this.setState({ menuList: this.getMenuList(value) });
        this.setState({ offsetTop: e.target.offsetTop });
    }

    liOnMouseLeave() {
        this.setState({ menuList: [] });
    }

    render() {
        let namespace = nameSpaceModel.getcurrentNamespace();
        let menuList = this.getMenuList();

        let routeLen = this.props.routes.length;
        if (this.props.routes[routeLen - 1].path === "*") {
            return <Page404 />
        } else {
            return (
                <div>
                    <Header {...this.props} />
                    <nav>
                        <ul className="list-unstyled nav-menu" onMouseLeave={() => { this.liOnMouseLeave() } }>
                            {
                                Object.keys(menuList).map((item, i) => {
                                    return (
                                        <li key={i} onMouseEnter={(e) => { this.liOnMouseEnter(item, e) } }>
                                            <Link to={`/namespace/${namespace}/${item}`} >{item}</Link>
                                        </li>
                                    )
                                })
                            }

                            <ul className='item-list' style={{ top: this.state.offsetTop }}>
                                {
                                    this.state.menuList.map((item, i) => {
                                        return <li key={i}><Link to={`/namespace/${namespace}/${item.path}`} >{item.text}</Link></li>
                                    })
                                }
                            </ul>
                        </ul>
                    </nav>
                    <main>
                        <div className="main-container">{this.props.children}</div>
                    </main>
                </div>
            );
        }
    }
}

function select(state) {
    return {
        namespaces: state.namespaces
    };
}

export default connect(select)(Index);
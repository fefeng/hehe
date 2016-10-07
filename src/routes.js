import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';

import App from "./layout";
import Namespace from './components/namespace';
import Node from './components/node';
import Pod from './components/pod';
import Replica from './components/replica';
import Service from './components/service';
import Volume from './components/volume';

const Routes = (
  <Route path="/" component={App}>
    <Route path="namespace(/:id)/node(/:id)" component={Node}/>
    <Route path="namespace(/:id)/node(/:id)" component={Node}/>
    <Route path="namespace(/:id)/pod" component={Pod} />
    <Route path="namespace(/:id)/replica" component={Replica}/>
    <Route path="namespace(/:id)/service" component={Service}/>
    <Route path="namespace(/:id)/volume" component={Volume}/>
  </Route>
);
export default Routes;
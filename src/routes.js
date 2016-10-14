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
    <Route path="namespace">
      <Route path=":id/node(/:id)" component={Node} />
      <Route path=":id/pod" component={Pod} />
      <Route path=":id/dep" component={Replica} />
      <Route path=":id/rs" component={Replica} />
      <Route path=":id/rc" component={Replica} />
      <Route path=":id/service" component={Service} />
      <Route path=":id/volume" component={Volume} />
      <Route path=":id/namespace" component={Namespace} />
    </Route>
    <Route path="*" />  // 404路由 
  </Route>
);
export default Routes;
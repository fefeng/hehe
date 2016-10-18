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
      <Route path=":nsid/node(/:id)" component={Node} />
      <Route path=":nsid/pod" component={Pod} />
      <Route path=":nsid/replica" component={Replica} />
      <Route path=":nsid/dep" component={Replica} />
      <Route path=":nsid/rs" component={Replica} />
      <Route path=":nsid/rc" component={Replica} />
      <Route path=":nsid/service" component={Service} />
      <Route path=":nsid/volume" component={Volume} />
      <Route path=":nsid/namespace" component={Namespace} />
    </Route>
    <Route path="*" />  // 404路由 
  </Route>
);
export default Routes;
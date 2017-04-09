import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import ActorPage from './components/ActorPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="actor/:id" component={ActorPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
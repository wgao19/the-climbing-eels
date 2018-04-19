/**
 *  @flow
 *  @format
 *  @jsx h
 * */
import { h, render } from 'preact';
import { Provider, connect } from 'preact-redux';
import Router, { Route } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Match from 'preact-router/match';
import store from './store';
import './style/site.scss';

render(
  <Provider store={store}>
    <Router>
      <AsyncRoute
        path="/"
        getComponent={() => import('./PageHome').then(module => module.default)}
      />
      <AsyncRoute
        path="/stories"
        getComponent={() =>
          import('./PageStories').then(module => module.default)
        }
      />
    </Router>
  </Provider>,
  document.body
);

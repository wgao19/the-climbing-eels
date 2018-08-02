/**
 *  @flow
 *  @format
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import PageHome from './PageHome';
import PageEvents from './PageEvents';
import PageSafetyInfo from './PageSafetyInfo';
import PageStories from './PageStories';
import initGoogle, { initGoogleClient } from 'utils/Google';
import './style/site.scss';

initGoogle(async () => {
  await initGoogleClient();
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/safety-info" component={PageSafetyInfo} />
          <Route exact path="/events" component={PageEvents} />
          <Route exact path="/stories" component={PageStories} />
        </div>
      </Router>
    </Provider>,
    // $FlowIgnoreNextLine
    document.querySelector('#root')
  );
});

import { h, render } from 'preact';
import { Provider, connect } from 'preact-redux';
import store from './store';
import PageHome from './PageHome';
import './style/site.scss';

const App = connect(state => state)(PageHome);
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body
  );

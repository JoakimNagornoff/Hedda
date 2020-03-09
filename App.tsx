import {Routes} from './src/Routes';
import {Provider, connect, DispatchProp} from 'react-redux';
import store from './src/store/index';

const App = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Routes;

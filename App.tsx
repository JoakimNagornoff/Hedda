import {Routes} from './src/Routes';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Routes;

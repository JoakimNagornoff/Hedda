import {createStore, combineReducers} from 'redux';
import animalReducer from '../store/reducers/animalReducer';

const rootReducer = combineReducers({
  animalReducer,
});

const store = () => createStore(rootReducer);

export default store;

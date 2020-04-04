import {combineReducers} from 'redux';
import animalReducer from '../store/reducers/animalReducer';
import personReducer from '../store/reducers/personReducer';
import paymentReducer from './reducers/paymentReducer';

const rootReducer = combineReducers({
  animalReducer,
  personReducer,
  paymentReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

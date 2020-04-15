import {combineReducers} from 'redux';
import animalReducer from '../store/reducers/animalReducer';
import personReducer from '../store/reducers/personReducer';
import paymentReducer from './reducers/paymentReducer';
import subscriptionReducer from './reducers/subscriptionReducer';
import insuranceReducer from './reducers/insuranceReducer';

const rootReducer = combineReducers({
  animalReducer,
  personReducer,
  paymentReducer,
  subscriptionReducer,
  insuranceReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

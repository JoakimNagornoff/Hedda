import {combineReducers} from 'redux';
import animalReducer from '../store/reducers/animalReducer';
import personReducer from '../store/reducers/personReducer';

const rootReducer = combineReducers({
  animalReducer,
  personReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

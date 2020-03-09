import {combineReducers} from 'redux';
import animalReducer from '../store/reducers/animalReducer';

const rootReducer = combineReducers({
  animalReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

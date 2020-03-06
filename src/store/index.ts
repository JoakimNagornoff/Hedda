import {createStore, combineReducers} from 'redux';
import {animalReducer} from './reducers/animalReducer';
import {IAnimalList} from './actions/types';

export interface IRootState {
  animal: IAnimalList;
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    animal: animalReducer,
  }),
);
export default store;

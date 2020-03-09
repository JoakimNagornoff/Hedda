import {ADD_ANIMAL, AnimalActionTypes, AnimalState} from '../actions/types';

const initialState: AnimalState = {
  value: '',
};
const animalReducer = (
  state = initialState,
  action: AnimalActionTypes,
): AnimalState => {
  console.log('action');
  console.log(action);
  switch (action.type) {
    case ADD_ANIMAL:
      console.log('updating state');
      return {value: action.value};
  }
  return state;
};
export default animalReducer;

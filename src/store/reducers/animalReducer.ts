import {
  ADD_ANIMAL,
  AnimalActionTypes,
  AnimalState,
  ADD_ANIMAL_NAME,
  ADD_ANIMAL_GENDER,
  ADD_ANIMAL_RACE,
  ADD_ANIMAL_AGE,
} from '../actions/types';

const initialState: AnimalState = {
  type: '',
  name: '',
  race: '',
  gender: '',
  age: null,
};
const animalReducer = (
  state = initialState,
  action: AnimalActionTypes,
): AnimalState => {
  console.log('action');
  console.log(action);
  switch (action.type) {
    case ADD_ANIMAL:
      return {
        ...state,
        type: action.data,
      };
    case ADD_ANIMAL_NAME:
      return {
        ...state,
        name: action.data,
      };
    case ADD_ANIMAL_RACE:
      return {
        ...state,
        race: action.data,
      };
    case ADD_ANIMAL_GENDER:
      return {
        ...state,
        gender: action.data,
      };
    case ADD_ANIMAL_AGE:
      return {
        ...state,
        age: action.data,
      };
  }
  return state;
};
export default animalReducer;

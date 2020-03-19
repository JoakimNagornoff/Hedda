import {
  ADD_ANIMAL,
  AnimalActionTypes,
  AnimalState,
  ADD_ANIMAL_NAME,
  ADD_ANIMAL_GENDER,
  ADD_ANIMAL_RACE,
  ADD_ANIMAL_CASTRATED,
  ADD_ANIMAL_AGE_YEAR,
  ADD_ANIMA_AGE_MONTH,
  ADD_ANIMAL_AGE_DAY,
} from '../actions/types';

const initialState: AnimalState = {
  type: '',
  name: '',
  race: '',
  gender: '',
  year: null,
  month: null,
  day: null,
  castrated: '',
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
    case ADD_ANIMAL_AGE_YEAR:
      return {
        ...state,
        year: action.data,
      };
    case ADD_ANIMA_AGE_MONTH:
      return {
        ...state,
        month: action.data,
      };
    case ADD_ANIMAL_AGE_DAY:
      return {
        ...state,
        day: action.data,
      };

    case ADD_ANIMAL_CASTRATED:
      return {
        ...state,
        castrated: action.data,
      };
  }
  return state;
};
export default animalReducer;

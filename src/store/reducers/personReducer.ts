import {
  PersonState,
  PersonActionTypes,
  ADD_PERSON_NAME,
  ADD_PERSON_LASTNAME,
  ADD_PERSON_EMAIL,
  ADD_PERSON_POSTKOD,
} from '../actions/types';

const initialState: PersonState = {
  name: '',
  lastName: '',
  email: '',
  postkod: null,
};
const personReducer = (
  state = initialState,
  action: PersonActionTypes,
): PersonState => {
  switch (action.type) {
    case ADD_PERSON_NAME:
      return {
        ...state,
        name: action.data,
      };
    case ADD_PERSON_LASTNAME:
      return {
        ...state,
        lastName: action.data,
      };
    case ADD_PERSON_EMAIL:
      return {
        ...state,
        email: action.data,
      };
    case ADD_PERSON_POSTKOD:
      return {
        ...state,
        postkod: action.data,
      };
  }
  return state;
};
export default personReducer;

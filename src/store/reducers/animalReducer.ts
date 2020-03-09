import {ADD_ANIMAL} from '../actions/types';

const initialState = {
  value: 'dog',
};
const animalReducer = (state = initialState, action: {type: any}) => {
  switch (action.type) {
    case 'ADD_ANIMAL':
      return {value: state.value};
  }
  return state;
};
export default animalReducer;

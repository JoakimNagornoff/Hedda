import {IAnimalList} from '../actions/types';

const init: IAnimalList = {
  animalList: [],
};

export function animalReducer(
  state: IAnimalList = init,
  action: any,
): IAnimalList {
  switch (action.type) {
    default:
      return state;
  }
}

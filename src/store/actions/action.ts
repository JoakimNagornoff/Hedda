import {ADD_ANIMAL, AnimalActionTypes} from './types';

export const addAnimal = (animal: string): AnimalActionTypes => {
  return {
    type: ADD_ANIMAL,
    value: animal,
  };
};

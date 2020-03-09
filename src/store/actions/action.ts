import {ADD_ANIMAL} from './types';


export const addAnimal: any(animal: any) => {
  return {
    type: ADD_ANIMAL,
    value: animal
  };
}

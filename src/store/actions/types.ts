export const ADD_ANIMAL = 'ADD_ANIMAL';

export interface AnimalState {
  value: string;
}

interface AddAnimalAction {
  type: typeof ADD_ANIMAL;
  value: string;
}

export type AnimalActionTypes = AddAnimalAction;

/*
export interface Animal {
  value: string;
  name: string;
  gender: string;
  age: number;
}

export interface AnimalList {
  animalList: Animal[];
}
*/

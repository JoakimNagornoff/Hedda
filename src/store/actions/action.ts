import {
  ADD_ANIMAL,
  AnimalActionTypes,
  ADD_ANIMAL_NAME,
  ADD_ANIMAL_GENDER,
  ADD_ANIMAL_AGE,
  ADD_ANIMAL_RACE,
  ADD_PERSON_NAME,
  ADD_PERSON_LASTNAME,
  ADD_PERSON_EMAIL,
  ADD_PERSON_POSTKOD,
  PersonActionTypes,
} from './types';

export const addAnimal = (animal: string): AnimalActionTypes => {
  return {
    type: ADD_ANIMAL,
    data: animal,
  };
};
export const addAnimalName = (name: string): AnimalActionTypes => {
  return {
    type: ADD_ANIMAL_NAME,
    data: name,
  };
};
export const addAnimalRace = (race: string): AnimalActionTypes => {
  return {
    type: ADD_ANIMAL_RACE,
    data: race,
  };
};

export const addAnimalGender = (gender: string): AnimalActionTypes => {
  return {
    type: ADD_ANIMAL_GENDER,
    data: gender,
  };
};

export const addAnimalAge = (age: number): AnimalActionTypes => {
  return {
    type: ADD_ANIMAL_AGE,
    data: age,
  };
};

export const addPersonName = (name: string): PersonActionTypes => {
  return {
    type: ADD_PERSON_NAME,
    data: name,
  };
};
export const addPersonLastName = (lastName: string): PersonActionTypes => {
  return {
    type: ADD_PERSON_LASTNAME,
    data: lastName,
  };
};
export const addPersonEmail = (email: string): PersonActionTypes => {
  return {
    type: ADD_PERSON_EMAIL,
    data: email,
  };
};
export const addPersonPostKod = (postkod: number): PersonActionTypes => {
  return {
    type: ADD_PERSON_POSTKOD,
    data: postkod,
  };
};

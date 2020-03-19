import {
  ADD_ANIMAL,
  AnimalActionTypes,
  ADD_ANIMAL_NAME,
  ADD_ANIMAL_GENDER,
  ADD_ANIMAL_AGE_YEAR,
  ADD_ANIMA_AGE_MONTH,
  ADD_ANIMAL_AGE_DAY,
  ADD_ANIMAL_RACE,
  ADD_ANIMAL_CASTRATED,
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

export const addAnimalAgeYear = (year: number): AnimalActionTypes => {
  return {
    type: ADD_ANIMAL_AGE_YEAR,
    data: year,
  };
};
export const addAnimalAgeMonth = (month: number): AnimalActionTypes => {
  return {
    type: ADD_ANIMA_AGE_MONTH,
    data: month,
  };
};
export const addAnimalAgeDay = (day: number): AnimalActionTypes => {
  return {
    type: ADD_ANIMAL_AGE_DAY,
    data: day,
  };
};

export const addAnimalCastrated = (castrated: string): AnimalActionTypes => {
  return {
    type: ADD_ANIMAL_CASTRATED,
    data: castrated,
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

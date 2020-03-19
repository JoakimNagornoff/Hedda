export const ADD_ANIMAL = 'ADD_ANIMAL';
export const ADD_ANIMAL_NAME = 'ADD_ANIMAL_NAME';
export const ADD_ANIMAL_RACE = 'ADD_ANIMAL_RACE';
export const ADD_ANIMAL_GENDER = 'ADD_ANIMAL_GENDER';
export const ADD_ANIMAL_AGE_YEAR = 'ADD_ANIMAL_AGE_YEAR';
export const ADD_ANIMA_AGE_MONTH = 'ADD_ANIMAL_AGE_MONTH';
export const ADD_ANIMAL_AGE_DAY = 'ADD_ANIMAL_AGE_DAY';
export const ADD_ANIMAL_CASTRATED = 'ADD_ANIMAL_CASTRATED';

export const ADD_PERSON_NAME = 'ADD_PERSON_NAME';
export const ADD_PERSON_LASTNAME = 'ADD_PERSON_LASTNAME';
export const ADD_PERSON_EMAIL = 'ADD_PERSON_EMAIL';
export const ADD_PERSON_POSTKOD = 'ADD_PERSON_POSTKOD';

export interface AnimalState {
  type: string;
  name: string;
  race: string;
  gender: string;
  year: number | null;
  month: number | null;
  day: number | null;
  castrated: string;
}

interface AddAnimalAction {
  type: typeof ADD_ANIMAL;
  data: string;
}
interface AddAnimalNameAction {
  type: typeof ADD_ANIMAL_NAME;
  data: string;
}
interface AddAnimalRaceAction {
  type: typeof ADD_ANIMAL_RACE;
  data: string;
}
interface AddAnimalGenderAction {
  type: typeof ADD_ANIMAL_GENDER;
  data: string;
}
interface AddAnimalAgeYearAction {
  type: typeof ADD_ANIMAL_AGE_YEAR;
  data: number;
}
interface AddAnimalAgeMonthAction {
  type: typeof ADD_ANIMA_AGE_MONTH;
  data: number;
}
interface AddAnimalAgeDayAction {
  type: typeof ADD_ANIMAL_AGE_DAY;
  data: number;
}
interface AddAnimalCastratedAction {
  type: typeof ADD_ANIMAL_CASTRATED;
  data: string;
}

export type AnimalActionTypes =
  | AddAnimalAction
  | AddAnimalNameAction
  | AddAnimalGenderAction
  | AddAnimalAgeYearAction
  | AddAnimalAgeMonthAction
  | AddAnimalAgeDayAction
  | AddAnimalRaceAction
  | AddAnimalCastratedAction;

export interface PersonState {
  name: string;
  lastName: string;
  email: string;
  postkod: number | null;
}
interface AddPersonNameAction {
  type: typeof ADD_PERSON_NAME;
  data: string;
}
interface AddPersonLastNameAction {
  type: typeof ADD_PERSON_LASTNAME;
  data: string;
}
interface AddPersonEmailAction {
  type: typeof ADD_PERSON_EMAIL;
  data: string;
}
interface AddPersonPostKodAction {
  type: typeof ADD_PERSON_POSTKOD;
  data: number;
}

export type PersonActionTypes =
  | AddPersonNameAction
  | AddPersonLastNameAction
  | AddPersonEmailAction
  | AddPersonPostKodAction;

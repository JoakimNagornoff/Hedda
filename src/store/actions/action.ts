import {
  ADD_ANIMAL,
  AnimalActionTypes,
  ADD_ANIMAL_NAME,
  ADD_ANIMAL_GENDER,
  ADD_ANIMAL_BIRTHDAY,
  ADD_ANIMAL_RACE,
  ADD_ANIMAL_CASTRATED,
  SUBMIT_ANIMAL,
  ADD_PERSON_NAME,
  ADD_PERSON_LASTNAME,
  ADD_PERSON_EMAIL,
  ADD_PERSON_POSTKOD,
  PersonActionTypes,
  PaymentActionTypes,
  CHANGE_PAYMENT_FIXED_DECUTIBLE,
  CHANGE_PAYMENT_VARIABLE_DECUTIBLE,
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

export const addAnimalBirthday = (date: Date): AnimalActionTypes => {
  return {
    type: ADD_ANIMAL_BIRTHDAY,
    data: date,
  };
};

export const addAnimalCastrated = (castrated: boolean): AnimalActionTypes => {
  return {
    type: ADD_ANIMAL_CASTRATED,
    data: castrated,
  };
};
export const submitAnimal = (isSubmit: boolean): AnimalActionTypes => {
  return {
    type: SUBMIT_ANIMAL,
    data: isSubmit,
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

export const changePaymentFixedDeductible = (
  name: string,
  value: number,
): PaymentActionTypes => {
  return {
    type: CHANGE_PAYMENT_FIXED_DECUTIBLE,
    data: {
      name,
      value,
    },
  };
};

export const changePaymentVariableDeductible = (
  name: string,
  value: number,
): PaymentActionTypes => {
  return {
    type: CHANGE_PAYMENT_VARIABLE_DECUTIBLE,
    data: {
      name,
      value,
    },
  };
};

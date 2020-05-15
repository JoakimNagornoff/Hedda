import {
  ADD_ANIMAL,
  AnimalActionTypes,
  ADD_ANIMAL_NAME,
  ADD_ANIMAL_GENDER,
  ADD_ANIMAL_BIRTHDAY,
  ADD_ANIMAL_RACE,
  ADD_ANIMAL_CASTRATED,
  ADD_PERSON_FULL_NAME,
  ADD_PERSON_EMAIL,
  ADD_PERSON_POSTKOD,
  PersonActionTypes,
  PaymentActionTypes,
  CHANGE_PAYMENT_FIXED_DECUTIBLE,
  CHANGE_PAYMENT_VARIABLE_DECUTIBLE,
  CHOOSE_PAYMENT_OPTION,
  SubscriptionActionTypes,
  CHOOSE_SUB_DATE,
  CHOOSE_SUB_INTERVAL,
  ChooseInsuranceActionTypes,
  CHOOSE_INSURANCE_BOOL,
  CHOOSE_INSURANCE_COMPANY,
  CHOOSE_INSURANCE_COMPANY_TERMINATION,
  FIREBASE_SUBMIT,
  AUTH_PERSON_LOGIN,
  AUTH_PERSON_LOGOUT,
  AUTH_PERSON_REGISTER
 
} from './types';
import {RootState} from '../';

import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth';

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

export const addPersonFullName = (name: string): PersonActionTypes => {
  return {
    type: ADD_PERSON_FULL_NAME,
    data: name,
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
export const AuthLoginPerson = (email: string, password: string, callback?: () => any ) : PersonActionTypes => {
  return {
    type: AUTH_PERSON_LOGIN,
    payload: async () => {
      const res = await auth().signInWithEmailAndPassword(email, password);
      const userDoc = await (await firestore().collection('Users').doc(res.user.uid).get()).data();
      if(callback) callback();
      return {
        uid: res.user.uid,
        email,
        name: res.user.displayName,
        postkod: userDoc ? userDoc.postkod : ''
      };
    } 
  }
}

export const AuthLogoutPerson = (callback?: () => any) : PersonActionTypes => {
  return {
    type: AUTH_PERSON_LOGOUT,
    payload: auth()
    .signOut()
    .then(() => {
      if (callback) callback();
    })
  }
}

export const AuthRegisterPerson = (name, email, password, postkod, callback?:() => any) : PersonActionTypes => {
  return {
    type: AUTH_PERSON_REGISTER,
    payload: async () => {
      const res = await auth()
        .createUserWithEmailAndPassword(email, password)
      
      await res.user.updateProfile({ displayName: name });
      await firestore().collection('Users').doc(res.user.uid).set({postkod});
      if(callback) callback();
      return {
        uid: res.user.uid,
        email,
        name,
        postkod
      };
    }  
  }
}

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
export const choosePaymentOption = (
  chooseOption: string,
): PaymentActionTypes => {
  return {
    type: CHOOSE_PAYMENT_OPTION,
    data: {
      chooseOption,
    },
  };
};
export const chooseSubDate = (dateOfSub: string): SubscriptionActionTypes => {
  return {
    type: CHOOSE_SUB_DATE,
    data: dateOfSub,
  };
};
export const chooseSubscriptonInterval = (
  chooseSubInterval: string,
): SubscriptionActionTypes => {
  return {
    type: CHOOSE_SUB_INTERVAL,
    data: chooseSubInterval,
  };
};

export const submitToFirebase = (store: RootState): SubscriptionActionTypes => {
  const {animalReducer: animal} = store;

  return {
    type: FIREBASE_SUBMIT,
    payload: firestore()
      .collection('Insurance')
      .add({
        animal,
        uid: auth().currentUser?.uid,
    
      }),
  };
};

export const chooseIfInsurance = (
  IfInsurance: boolean,
): ChooseInsuranceActionTypes => {
  return {
    type: CHOOSE_INSURANCE_BOOL,
    data: IfInsurance,
  };
};

export const chooseInsuranceCompany = (
  InsuranceCompany: string,
): ChooseInsuranceActionTypes => {
  return {
    type: CHOOSE_INSURANCE_COMPANY,
    data: InsuranceCompany,
  };
};

export const chooseInsuranceCompanyTermination = (
  TerminationCompany: boolean,
): ChooseInsuranceActionTypes => {
  return {
    type: CHOOSE_INSURANCE_COMPANY_TERMINATION,
    data: TerminationCompany,
  };
};

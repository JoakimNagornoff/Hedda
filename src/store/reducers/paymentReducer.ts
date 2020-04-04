import {
  PaymentState,
  PaymentActionTypes,
  ADD_PAYMENT_BAS,
  ADD_PAYMENT_STANDARD,
  ADD_PAYMENT_PREMIUM,
  ADD_PAYMENT_FIXED_DECUTIBLE,
  ADD_PAYMENT_VARIABLE_DECUTIBLE,
  ADD_PAYMENT_FIXED_DECUTIBLE_STANDARD,
  ADD_PAYMENT_VARIABLE_DECUTIBLE_STANDARD,
  ADD_PAYMENT_FIXED_DECUTIBLE_PREMIUM,
  ADD_PAYMENT_VARIABLE_DECUTIBLE_PREMIUM,
} from '../actions/types';

const initialState: PaymentState = {
  bas: 320,
  standard: 620,
  premium: 820,
  fixedDeductible: 1500,
  variableDeductible: 25,
  fixedDecutibleStandard: 1500,
  variableDecutibleStandard: 25,
  fixedDecutiblePremium: 1500,
  variableDecutiblePremium: 25,
};

const paymentReducer = (
  state = initialState,
  action: PaymentActionTypes,
): PaymentState => {
  switch (action.type) {
    case ADD_PAYMENT_BAS:
      return {
        ...state,
        bas: action.data,
      };
    case ADD_PAYMENT_STANDARD:
      return {
        ...state,
        standard: action.data,
      };
    case ADD_PAYMENT_PREMIUM:
      return {
        ...state,
        premium: action.data,
      };
    case ADD_PAYMENT_FIXED_DECUTIBLE:
      return {
        ...state,
        fixedDeductible: action.data,
      };
    case ADD_PAYMENT_VARIABLE_DECUTIBLE:
      return {
        ...state,
        variableDeductible: action.data,
      };
    case ADD_PAYMENT_FIXED_DECUTIBLE_STANDARD:
      return {
        ...state,
        fixedDecutibleStandard: action.data,
      };
    case ADD_PAYMENT_VARIABLE_DECUTIBLE_STANDARD:
      return {
        ...state,
        variableDecutibleStandard: action.data,
      };
    case ADD_PAYMENT_FIXED_DECUTIBLE_PREMIUM:
      return {
        ...state,
        fixedDecutiblePremium: action.data,
      };
    case ADD_PAYMENT_VARIABLE_DECUTIBLE_PREMIUM:
      return {
        ...state,
        variableDecutiblePremium: action.data,
      };
  }
  return state;
};
export default paymentReducer;

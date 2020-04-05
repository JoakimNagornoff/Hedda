import {
  PaymentState,
  PaymentActionTypes,
  CHANGE_PAYMENT_FIXED_DECUTIBLE,
  CHANGE_PAYMENT_VARIABLE_DECUTIBLE,
} from '../actions/types';

const initialState: PaymentState = {
  options: [
    {
      name: 'bas',
      baseCost: 300,
      fixedDeductible: 1500,
      variableDeductible: 25,
    },
    {
      name: 'standard',
      baseCost: 500,
      fixedDeductible: 1500,
      variableDeductible: 25,
    },
    {
      name: 'premium',
      baseCost: 700,
      fixedDeductible: 1500,
      variableDeductible: 25,
    },
  ],
};
const paymentReducer = (
  state = initialState,
  action: PaymentActionTypes,
): PaymentState => {
  switch (action.type) {
    case CHANGE_PAYMENT_FIXED_DECUTIBLE:
      return {
        ...state,
        options: state.options.map((o) => {
          if (o.name === action.data.name) {
            return {
              ...o,
              fixedDeductible: action.data.value,
            };
          }
          return o;
        }),
      };

    case CHANGE_PAYMENT_VARIABLE_DECUTIBLE:
      return {
        ...state,
        options: state.options.map((o) => {
          if (o.name === action.data.name) {
            return {
              ...o,
              variableDeductible: action.data.value,
            };
          }
          return o;
        }),
      };
  }
  return state;
};
export default paymentReducer;

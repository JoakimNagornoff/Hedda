import {
  PaymentState,
  PaymentActionTypes,
  CHANGE_PAYMENT_FIXED_DECUTIBLE,
  CHANGE_PAYMENT_VARIABLE_DECUTIBLE,
  CHOOSE_PAYMENT_OPTION,
  ADD_ANIMAL,
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
  chooseOption: '',
  choosenFixedDeducitble: 0,
  choosenvariableDeductible: 0,
};

const animalCosts = {
  Hund: {
    bas: 300,
    standard: 500,
    premium: 700,
  },
  Katt: {
    bas: 200,
    standard: 400,
    premium: 600,
  },
  Häst: {
    bas: 700,
    standard: 1000,
    premium: 1300,
  },
};

const paymentReducer = (
  state = initialState,
  action: PaymentActionTypes,
): PaymentState => {
  switch (action.type) {
    case CHANGE_PAYMENT_FIXED_DECUTIBLE:
      return {
        ...state,
        options: state.options.map(o => {
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
        options: state.options.map(o => {
          if (o.name === action.data.name) {
            return {
              ...o,
              variableDeductible: action.data.value,
            };
          }
          return o;
        }),
      };
    case CHOOSE_PAYMENT_OPTION:
      return {
        ...state,
        chooseOption: action.data.chooseOption,
        choosenFixedDeducitble: action.data.choosenFixedDeducitble,
        choosenvariableDeductible: action.data.choosenvariableDeductible,
      };
    case ADD_ANIMAL:
      return {
        ...state,
        options: state.options.map(o => ({
          ...o,
          baseCost: animalCosts[action.data][o.name],
        })),
      };
  }

  return state;
};
export default paymentReducer;

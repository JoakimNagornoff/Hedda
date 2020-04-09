import {
  CreditCardActionTypes,
  CreditCardState,
  CHOOSE_PAYMENT_DATE,
} from '../actions/types';

const initialState: CreditCardState = {
  dateOfSub: null,
};

const creditcardReducer = (
  state = initialState,
  action: CreditCardActionTypes,
): CreditCardState => {
  switch (action.type) {
    case CHOOSE_PAYMENT_DATE:
      return {
        ...state,
        dateOfSub: action.data,
      };
  }
  return state;
};
export default creditcardReducer;

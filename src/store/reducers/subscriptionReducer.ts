import {
  SubscriptionActionTypes,
  SubscriptionState,
  CHOOSE_SUB_DATE,
  CHOOSE_SUB_INTERVAL,
  CHOOSE_COST,
  FIREBASE_SUBMIT_PENDING,
  FIREBASE_SUBMIT_FULFILLED,
  FIREBASE_SUBMIT_REJECTED,
} from '../actions/types';

const initialState: SubscriptionState = {
  dateOfSub: '',
  chooseSubInterval: 'månad',
  chooseCost: 0,
  fireBasePending: false,
  fireBaseSuccess: false,
  fireBaseError: '',
};

const creditcardReducer = (
  state = initialState,
  action: SubscriptionActionTypes,
): SubscriptionState => {
  console.log(action);
  switch (action.type) {
    case CHOOSE_SUB_DATE:
      return {
        ...state,
        dateOfSub: action.data,
      };
    case CHOOSE_SUB_INTERVAL:
      return {
        ...state,
        chooseSubInterval: action.data,
      };
    case CHOOSE_COST:
      return {
        ...state,
        chooseCost: action.data,
      };
    case FIREBASE_SUBMIT_PENDING:
      return {
        ...state,
        fireBasePending: true,
      };
    case FIREBASE_SUBMIT_REJECTED:
      return {
        ...state,
        fireBaseError: 'Något gick fel.',
        fireBasePending: false,
      };
    case FIREBASE_SUBMIT_FULFILLED:
      return {
        ...state,
        fireBasePending: false,
        fireBaseSuccess: true,
      };
  }

  return state;
};
export default creditcardReducer;

import {
  SubscriptionActionTypes,
  SubscriptionState,
  CHOOSE_SUB_DATE,
  CHOOSE_SUB_INTERVAL,
  CHOOSE_COST,
  FIREBASE_SUBMIT_PENDING,
  FIREBASE_SUBMIT_FULFILLED,
  FIREBASE_SUBMIT_REJECTED,
  RESET_STORE,
} from '../actions/types';
import {calculatedCost} from 'utils';

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
        chooseSubInterval: action.data.chooseSubInterval,
        chooseCost: calculatedCost(
          action.data.chooseCost.baseCost,
          action.data.chooseCost.fixedDeductible,
          action.data.chooseCost.variableDeductible,
          action.data.chooseSubInterval,
        ),
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
    case RESET_STORE:
      return initialState;
  }

  return state;
};
export default creditcardReducer;

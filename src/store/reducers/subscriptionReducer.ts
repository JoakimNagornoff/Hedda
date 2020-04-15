import {
  SubscriptionActionTypes,
  SubscriptionState,
  CHOOSE_SUB_DATE,
  CHOOSE_SUB_INTERVAL,
} from '../actions/types';

const initialState: SubscriptionState = {
  dateOfSub: null,
  chooseSubInterval: '',
};

const creditcardReducer = (
  state = initialState,
  action: SubscriptionActionTypes,
): SubscriptionState => {
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
  }
  return state;
};
export default creditcardReducer;

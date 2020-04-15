import {
  CHOOSE_INSURANCE_BOOL,
  InsuranceState,
  ChooseInsuranceActionTypes,
  CHOOSE_INSURANCE_COMPANY,
  CHOOSE_INSURANCE_COMPANY_TERMINATION,
} from '../actions/types';

const initialState: InsuranceState = {
  IfInsurance: false,
  InsuranceCompany: '',
  TerminationCompany: false,
};

const insuranceReducer = (
  state = initialState,
  action: ChooseInsuranceActionTypes,
): InsuranceState => {
  console.log('action');
  console.log(action);
  switch (action.type) {
    case CHOOSE_INSURANCE_BOOL:
      return {
        ...state,
        IfInsurance: action.data,
      };
    case CHOOSE_INSURANCE_COMPANY:
      return {
        ...state,
        InsuranceCompany: action.data,
      };
    case CHOOSE_INSURANCE_COMPANY_TERMINATION:
      return {
        ...state,
        TerminationCompany: action.data,
      };
  }
  return state;
};

export default insuranceReducer;

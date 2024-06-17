// src/reducers/greenCreditReducers.js

export const greenCreditReducer = (state = { greenCredits: [] }, action) => {
    switch (action.type) {
      case 'GREEN_CREDIT_CREATE_REQUEST':
        return { loading: true };
      case 'GREEN_CREDIT_CREATE_SUCCESS':
        return { loading: false, success: true, greenCredit: action.payload };
      case 'GREEN_CREDIT_CREATE_FAIL':
        return { loading: false, error: action.payload };
      case 'GREEN_CREDIT_LIST_REQUEST':
        return { loading: true, greenCredits: [] };
      case 'GREEN_CREDIT_LIST_SUCCESS':
        return { loading: false, greenCredits: action.payload };
      case 'GREEN_CREDIT_LIST_FAIL':
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
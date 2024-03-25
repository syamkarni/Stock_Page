import {
    FETCH_STOCK_DETAILS_START,
    FETCH_STOCK_DETAILS_SUCCESS,
    FETCH_STOCK_DETAILS_FAILURE
  } from '../actions/stockDetailsActions';
  
  const initialState = {
    stockDetail: {},
    loading: false,
    error: null
  };
  
  const stockDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_STOCK_DETAILS_START:
        return { ...state, loading: true, error: null };
      case FETCH_STOCK_DETAILS_SUCCESS:
        return { ...state, loading: false, stockDetail: action.payload };
      case FETCH_STOCK_DETAILS_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default stockDetailsReducer;
  
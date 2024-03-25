import axios from 'axios';

export const FETCH_STOCK_DETAILS_START = 'FETCH_STOCK_DETAILS_START';
export const FETCH_STOCK_DETAILS_SUCCESS = 'FETCH_STOCK_DETAILS_SUCCESS';
export const FETCH_STOCK_DETAILS_FAILURE = 'FETCH_STOCK_DETAILS_FAILURE';

export const fetchStockDetails = (number) => async (dispatch) => {
  dispatch({ type: FETCH_STOCK_DETAILS_START });

  try {
    const response = await axios.get(`http://127.0.0.1:3001/stock/${number}`);
    dispatch({ type: FETCH_STOCK_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_STOCK_DETAILS_FAILURE, error });
  }
};

export const setStocks = (newStocks) => (dispatch, getState) => {
    const { stockList } = getState().stocks;
    const updatedStocks = [...stockList, ...newStocks];
    dispatch({
        type: 'SET_STOCKS',
        payload: updatedStocks,
    });
};
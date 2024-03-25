const initialState = {
    stockList: [],
};

const stocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STOCKS':
            return { ...state, stockList: action.payload };
        default:
            return state;
    }
};

export default stocksReducer;

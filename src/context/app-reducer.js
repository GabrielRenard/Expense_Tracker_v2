import { ADD_TRANSACTION, DELETE_TRANSACTION, FILTER_YEAR, TOGGLE_TRANSACTION } from './app-actions'

const appReducer = (state, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            };
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)

            };
        case TOGGLE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.map(transaction => transaction.id === action.payload ? { ...transaction, selected: !transaction.selected } : transaction)
            };
        case FILTER_YEAR:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.date.getFullYear().toString() === action.payload),
            }
        default:
            return state;

    }
}

export default appReducer;
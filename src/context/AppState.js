import React, { useReducer } from 'react';
import AppContext from './app-context';
import appReducer from './app-reducer';

import { ADD_TRANSACTION, DELETE_TRANSACTION, FILTER_YEAR, TOGGLE_TRANSACTION } from './app-actions';

export const AppState = ({ children }) => {
    const initialState = {
        transactions: []
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    //    Add transaction
    const addTransaction = (transaction) => {
        dispatch({
            type: ADD_TRANSACTION,
            payload: transaction
        })
    }

    //  delete transaction
    const deleteTransaction = (transactionID) => {
        dispatch({
            type: DELETE_TRANSACTION,
            payload: transactionID
        })
    }

    // toggle transaction
    const toggleTransaction = (transactionID) => {
        dispatch({
            type: TOGGLE_TRANSACTION,
            payload: transactionID
        })
    };

    // Filter transactions by year
    const filterYear = (selectedYear) => {
        dispatch({
            type: FILTER_YEAR,
            payload: selectedYear
        })
    }

    return (
        <AppContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction,
            toggleTransaction,
            filterYear,
        }
        }>
            {children}
        </AppContext.Provider >
    )
}

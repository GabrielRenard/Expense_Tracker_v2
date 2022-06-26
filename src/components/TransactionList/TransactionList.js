import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import AppContext from '../../context/app-context';

import { TransactionItem } from './TransactionItem';
import { FilterTransactions } from './FilterTransactions';

const Container = styled.section`
    border: 1px solid #000;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 1rem 0;
    
    h2 {
        margin-bottom: 1rem;
    }

    .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const TransactionList = () => {
    const { transactions, deleteTransaction, toggleTransaction } = useContext(AppContext);

    const [selectedYear, setSelectedYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredTransactions = transactions.filter(transaction => transaction.date.getFullYear().toString() === selectedYear);

    return (
        <>
            {transactions.length > 0 ? <Container>
                <div className="flex-container">
                    <h2>Transaction History</h2>
                </div>
                <FilterTransactions onChangeHandler={filterChangeHandler} selected={selectedYear} />
                {filteredTransactions.map(transaction => (
                    <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                        clickToDelete={() => deleteTransaction(transaction.id)}
                        clickToToggle={() => toggleTransaction(transaction.id)}
                        selected={transaction.selected}
                    />
                ))}
            </Container> : null}
        </>
    )
}

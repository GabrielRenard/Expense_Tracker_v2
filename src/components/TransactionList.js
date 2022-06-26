import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

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




export const TransactionList = ({ transactions, deleteTransaction }) => {

    return (
        <>
            {transactions.length > 0 ? <Container>
                <div className="flex-container">
                    <h2>Transaction History</h2>
                </div>
                <FilterTransactions />
                {transactions.map(transaction => (
                    <TransactionItem key={transaction.id} transaction={transaction} className="item" deleteTransaction={deleteTransaction} />
                ))}
            </Container> : null}
        </>
    )
}

import React from 'react';
import styled from 'styled-components';
import { TransactionItem } from './TransactionItem';

const Container = styled.section`
    border: 1px solid #000;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 1rem 0;
    

    h2 {
        margin-bottom: 1rem;
    }
`

export const TransactionList = ({ transactions }) => {
    return (
        <>
            {transactions.length > 0 ? <Container>
                <h2>Transaction History</h2>
                {transactions.map(transaction => (
                    <>
                        <TransactionItem key={transaction.id} transaction={transaction} />
                    </>
                ))}
            </Container> : null}
        </>
    )
}

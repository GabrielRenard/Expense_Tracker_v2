import React from 'react'
import styled from 'styled-components'
import { TransactionItemText } from './TransactionItemText';
import { TransactionItemDate } from './TransactionItemDate';
import { TransactionItemAmount } from './TransactionItemAmount';

const Container = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
border: 1px solid #000;
border-radius: 0.25rem;
padding: 3px;
margin: 0.5rem 0;

`

export const TransactionItem = ({ key, transaction }) => {
    return (
        <>
            <Container>
                <TransactionItemDate date={transaction.date} />
                <TransactionItemText text={transaction.text} />
                <TransactionItemAmount amount={transaction.amount} />
            </Container>
        </>
    )
}

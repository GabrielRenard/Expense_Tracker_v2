import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-right: 2px solid rgba(0,0,0,0.5);
width: 100%;
gap: 0.25rem;

.positive {
    color: ${({ theme }) => theme.colors.positive};
    font-weight: 600;
}
`

export const BalanceIncome = ({ transactions }) => {
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(amounts => amounts > 0)
        .reduce((acc, amount) => (acc += amount), 0).toFixed(2);

    return (
        <Container>
            <h3>Income</h3>
            <p className={`${income > 0 ? 'positive' : null}`}>${income}</p>
        </Container>
    )
}
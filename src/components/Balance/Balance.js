import React, { useContext } from 'react';
import AppContext from '../../context/app-context';
import styled from 'styled-components';
import { BalanceExpense } from './BalanceExpense';
import { BalanceIncome } from './BalanceIncome';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
.positive {
    color: ${({ theme }) => theme.colors.positive};
}
.negative {
    color: ${({ theme }) => theme.colors.negative};
}
`

const CardContainer = styled.div`
margin: 1rem 0 1rem;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 0.5rem;
height: 5rem;

box-shadow:  5px 5px 9px #aeaeae,
             -5px -5px 9px #fafafa;
padding: 0.5rem 1rem;


@media screen and (max-width: 2000px) {
  width: 40vw;
}
@media screen and (max-width: 1200px) {
  width: 50vw;
}
@media screen and (max-width: 992px) {
  width: 60vw;
}
@media screen and (max-width: 768px) {
  width: 70vw;
}
@media screen and (max-width: 576px) {
  width: 90vw;
}


`


export const Balance = () => {
  const { transactions } = useContext(AppContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);


  return (
    <>
      <Container>
        <h2>Your Balance</h2>
        <h3
          className={`${total > 0 ? 'positive' : null} 
                ${total < 0 ? 'negative' : null}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          key="random"
        >${total}</h3>
        <CardContainer>
          <BalanceIncome transactions={transactions} />
          <BalanceExpense transactions={transactions} />
        </CardContainer>
      </Container>
    </>
  )
}

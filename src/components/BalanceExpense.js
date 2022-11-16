import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  .negative {
    color: red;
  }
`;

export const BalanceExpense = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);

  const expense = amounts
    .filter(amount => amount < 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  return (
    <Container>
      <h3>Expense</h3>
      <p className={`${expense < 0 ? "negative" : null}`}>${expense}</p>
    </Container>
  );
};

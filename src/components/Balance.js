import React from "react";
import styled from "styled-components";
import { BalanceExpense } from "./BalanceExpense";
import { BalanceIncome } from "./BalanceIncome";

const Container = styled.div`
  .positive {
    color: green;
  }
  .negative {
    color: red;
  }
`;

const Card = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.25rem;
  height: 5rem;
  background: #e0e0e0;
  box-shadow: 20px 20px 21px #bebebe, -20px -20px 21px #ffffff;
`;

export const Balance = ({ transactions }) => {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);
  return (
    <>
      <Container>
        <h2>Your Balance</h2>
        <h3
          className={`${total > 0 ? "positive" : null} ${
            total < 0 ? "negative" : null
          }`}
        >
          ${total}
        </h3>
        <Card>
          <BalanceIncome transactions={transactions} />
          <BalanceExpense transactions={transactions} />
        </Card>
      </Container>
    </>
  );
};

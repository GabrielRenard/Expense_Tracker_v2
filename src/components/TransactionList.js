import React from "react";
import styled from "styled-components";
import { TransactionItem } from "./TransactionItem";

const Container = styled.section`
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 1rem 0;
  background: #e0e0e0;
  box-shadow: inset 7px 7px 10px #bababa, inset -7px -7px 10px #ffffff;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const TransactionList = ({ transactions }) => {
  return (
    <>
      {transactions.length > 0 ? (
        <Container>
          <h2>Transaction History</h2>
          {transactions.map(transaction => (
            <>
              <TransactionItem key={transaction.id} transaction={transaction} />
            </>
          ))}
        </Container>
      ) : null}
    </>
  );
};

import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { TransactionItemText } from "./TransactionItemText";
import { TransactionItemDate } from "./TransactionItemDate";
import { TransactionItemAmount } from "./TransactionItemAmount";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  background: #e0e0e0;
  box-shadow: inset 7px 7px 5px #bababa, inset -7px -7px 5px #ffffff;
  cursor: pointer;

  .complete {
    opacity: 0.5;
  }
`;

export const TransactionItem = ({ key, transaction }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Container
        onClick={toggleHandler}
        className={`${toggle ? "complete" : null}`}
      >
        <TransactionItemDate date={transaction.date} />
        <TransactionItemText text={transaction.text} />
        <TransactionItemAmount amount={transaction.amount} />
      </Container>
    </>
  );
};

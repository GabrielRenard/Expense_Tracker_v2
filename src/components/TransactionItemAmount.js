import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0 0 0 auto;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  padding: 3px;
  width: auto;
  background: #e0e0e0;
  box-shadow: inset 7px 7px 5px #bababa, inset -7px -7px 5px #ffffff;
`;

export const TransactionItemAmount = ({ amount }) => {
  return (
    <>
      <Container>
        <h4>${amount.toFixed(2)}</h4>
      </Container>
    </>
  );
};

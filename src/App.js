import React, { useState } from 'react';
import { AddTransaction } from './components/TransactionInput/AddTransaction';
import { TransactionList } from './components/TransactionList/TransactionList';
import { Balance } from './components/Balance/Balance';
import styled from 'styled-components';
import { AppState } from './context/AppState';

const AppContainer = styled.div`
display: flex;
flex-direction: column;
width: 40vw;
h1 {
  margin: 2rem 0;
  align-self: center;
}

@media screen and (max-width: 1400px) {
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

function App() {

  return (
    <>
      <AppContainer>
        <h1>Expense Tracker</h1>
        <AppState>
          <Balance />
          <AddTransaction />
          <TransactionList />
        </AppState>
      </AppContainer>
    </>
  );
}

export default App;

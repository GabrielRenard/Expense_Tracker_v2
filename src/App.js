import React, { useState } from 'react';
import { AddTransaction } from './components/AddTransaction';
import { TransactionList } from './components/TransactionList';
import { Balance } from './components/Balance';
import styled from 'styled-components';

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
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    const newTransaction = { ...transaction, id: Math.random().toString() }
    setTransactions((prevState) => {
      return [newTransaction, ...prevState]
    })
  };

  

  

  return (
    <>
      <AppContainer>
        <h1>Expense Tracker</h1>
        <Balance transactions={transactions} />
        <AddTransaction onAdd={addTransaction} />
        <TransactionList transactions={transactions} />
      </AppContainer>
    </>
  );
}

export default App;

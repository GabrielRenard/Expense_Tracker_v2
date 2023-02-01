import React, { useState } from "react";
import { AddTransaction } from "./components/TransactionInput/AddTransaction";
import { TransactionList } from "./components/TransactionList/TransactionList";
import { Balance } from "./components/Balance/Balance";
import styled from "styled-components";
import { AppState } from "./context/AppState";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    textPrimary: "#404040",
    backgroundBody: "hsl(0, 0%, 83%)",
    backgroundPrimary: "hsl(0, 0%, 25%)",
    backgroundSecondary: "#2a2a2a",
    accentPrimary: "hsl(191, 88%, 64%)",
    positive: "rgb(64, 150, 64)",
    negative: "rgb(150, 64, 64)",
    border: "#404040",
  },
};

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  h1 {
    margin-top: 0.5rem;
    align-self: center;
  }
`;
function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = transaction => {
    const newTransaction = { ...transaction, id: Math.random().toString() };
    setTransactions(prevState => {
      return [newTransaction, ...prevState];
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <AppContainer>
          <AppState>
            <Balance />
            <AddTransaction />
            <TransactionList />
          </AppState>
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;

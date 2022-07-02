import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import AppContext from '../../context/app-context';

import { TransactionItem } from './TransactionItem';
import { FilterTransactions } from './FilterTransactions';

const BackgroundContainer = styled.div`
background-color: #404040;
margin: 1rem 0 auto;
width: 100vw;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
    padding: 0.5rem;
    margin-top: 1rem;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: #404040;
    color: ${({ theme }) => theme.colors.backgroundBody};
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
    box-shadow:  inset 4px 4px 7px #232323,
            inset -4px -4px 7px #5d5d5d;


             @media screen and (max-width: 2000px) {
  width: 70vw;
}
@media screen and (max-width: 1200px) {
  width: 80vw;
}
@media screen and (max-width: 992px) {
  width: 80vw;
}
@media screen and (max-width: 768px) {
  width: 90vw;
}
@media screen and (max-width: 576px) {
  width: 90vw;
}
    
    h2 {
        margin-bottom: 1rem;
    }

    .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const TransactionList = () => {
    const { transactions, deleteTransaction, toggleTransaction } = useContext(AppContext);

    const [selectedYear, setSelectedYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredTransactions = transactions.filter(transaction => transaction.date.getFullYear().toString() === selectedYear);

    const mainContainerTransition = {
        visible: {
            height: "100%",
            opacity: 1,
        },
        hidden: {
            height: 0,
            opacity: 0
        }
    }

    const childContainerTransition = {
        visible: { opacity: 1, height: "auto" },
        hidden: { opacity: 0, height: 0 }
    }

    return (
        <>
            <AnimatePresence>
                {transactions.length > 0 ?
                    <motion.div
                        variants={mainContainerTransition}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                    >
                        <BackgroundContainer>
                            <Container>
                                <motion.div
                                    variants={mainContainerTransition}
                                    initial='hidden'
                                    animate='visible'
                                    exit='hidden'
                                    layoutId='tester'
                                >
                                    <div className="flex-container">
                                        <h2>Transaction History</h2>
                                    </div>
                                    <FilterTransactions onChangeHandler={filterChangeHandler} selected={selectedYear} />

                                    {filteredTransactions.map(transaction => (
                                        <motion.div
                                            variants={childContainerTransition}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            key={transaction.id}
                                            layoutId={transaction.id}
                                        >
                                            <TransactionItem
                                                key={transaction.id}
                                                transaction={transaction}
                                                clickToDelete={() => deleteTransaction(transaction.id)}
                                                clickToToggle={() => toggleTransaction(transaction.id)}
                                                selected={transaction.selected}
                                            />
                                        </motion.div>
                                    ))}

                                </motion.div>
                            </Container>
                        </BackgroundContainer>
                    </motion.div>
                    : null}
            </AnimatePresence>
        </>
    )
}

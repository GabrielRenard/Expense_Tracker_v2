import React, { useState } from 'react'
import styled from 'styled-components'
import { TransactionItemText } from './TransactionItemText';
import { TransactionItemDate } from './TransactionItemDate';
import { TransactionItemAmount } from './TransactionItemAmount';
import { MdDelete } from 'react-icons/md';

const TransactionItemContainer = styled.div`
display: flex;
align-items: center;

.delete-icon {
        margin: auto 8px auto 16px;
        font-size: 26px;
        cursor: pointer;
        transition: 0.2s;
    }
    
    .delete-icon:hover {

        transform: scale(1.5);
    }
`

const Container = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
border: 1px solid #000;
border-radius: 0.25rem;
padding: 3px;
margin: 0.5rem 0;
cursor: pointer;
width: 100%;

opacity: ${props => props.selected ? '0.5' : 1}
`

export const TransactionItem = ({ transaction, deleteTransaction, key }) => {
    const [selected, setSelected] = useState(false);

    const selectedItem = () => {
        setSelected(!selected);
    }

    const deleteItem = () => {
        deleteTransaction(transaction.id)
    }

    return (
        <TransactionItemContainer>
            <Container onClick={selectedItem} selected={selected}>
                <TransactionItemDate date={transaction.date} />
                <TransactionItemText text={transaction.text} />
                <TransactionItemAmount amount={transaction.amount} />
            </Container>
            <MdDelete className='delete-icon' onClick={deleteItem} />
        </TransactionItemContainer>
    )
}

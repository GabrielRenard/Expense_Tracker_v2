import React from 'react'
import styled from 'styled-components'
import { TransactionItemText } from './TransactionItemText';
import { TransactionItemDate } from './TransactionItemDate';
import { TransactionItemAmount } from './TransactionItemAmount';
import { MdDelete } from 'react-icons/md';

const TransactionItemContainer = styled.div`
display: flex;
align-items: center;
color: ${({ theme }) => theme.colors.backgroundBody};


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
border-radius: 0.25rem;
padding: 3px;
margin: 0.5rem 0;
cursor: pointer;
width: 100%;
border: 1px solid ${({ theme }) => theme.colors.border};
border-radius: 0.25rem;
background: ${({ theme }) => theme.colors.backgroundBody};
color: ${({ theme }) => theme.colors.textPrimary};
opacity: ${props => props.selected ? '0.3' : '1'};
transition: 0.25s ease;

background: #404040;
box-shadow: inset 4px 4px 7px #232323,
            inset -4px -4px 7px #5d5d5d;

`

export const TransactionItem = ({ transaction, clickToDelete, clickToToggle, selected }) => {

    return (
        <TransactionItemContainer>
            <Container onClick={clickToToggle} selected={selected}>
                <TransactionItemDate date={transaction.date} />
                <TransactionItemText text={transaction.text} />
                <TransactionItemAmount amount={transaction.amount} />
            </Container>
            <MdDelete className='delete-icon' onClick={clickToDelete} />
        </TransactionItemContainer>
    )
}

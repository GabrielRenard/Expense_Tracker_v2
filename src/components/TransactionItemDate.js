import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #000;
    border-radius: 0.25rem;
    padding: 3px;

    .month {
        font-size: 12px;
    }
    .day {
        font-size: 16px;
    }
    .year {
        font-size: 12px;
    }
`

export const TransactionItemDate = ({ date }) => {
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();


    return (
        <>
            <Container>
                <h4 className='month'>{month}</h4>
                <h4 className='day'>{day}</h4>
                <h4 className='year'>{year}</h4>
            </Container>
        </>
    )
}

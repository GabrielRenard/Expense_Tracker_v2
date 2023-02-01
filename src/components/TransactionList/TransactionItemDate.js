import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 0.25rem;
    box-shadow: inset 4px 4px 7px #232323,
            inset -4px -4px 7px #5d5d5d;
    color: ${({ theme }) => theme.colors.backgroundBody};
    margin: 5px;

    .month {
        font-size: 12px;
    }
    .day {
        font-size: 16px;
    }
    .year {
        font-size: 12px;
    }

    @media screen and (max-width: 2000px) {
        .month {
        font-size: 18px;
    }
    .day {
        font-size: 22px;
    }
    .year {
        font-size: 18px;
    }
}
@media screen and (max-width: 1200px) {
    .month {
        font-size: 16px;
    }
    .day {
        font-size: 20px;
    }
    .year {
        font-size: 16px;
    }
}
@media screen and (max-width: 992px) {
    .month {
        font-size: 16px;
    }
    .day {
        font-size: 20px;
    }
    .year {
        font-size: 16px;
    }
}
@media screen and (max-width: 768px) {
    .month {
        font-size: 14px;
    }
    .day {
        font-size: 18px;
    }
    .year {
        font-size: 14px;
    }
}
@media screen and (max-width: 576px) {
  .month {
        font-size: 12px;
    }
    .day {
        font-size: 16px;
    }
    .year {
        font-size: 12px;
    }
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

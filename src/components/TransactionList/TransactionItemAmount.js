import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
margin: 0 8px 0 auto;
height: 55px;
justify-content: center;
align-items: center;
border-radius: 0.25rem;
padding: 5px;
width: auto;
border-radius: 0.25rem;
color: ${({ theme }) => theme.colors.backgroundBody};
box-shadow: inset 4px 4px 7px #232323,
            inset -4px -4px 7px #5d5d5d;

            @media screen and (max-width: 2000px) {
  font-size: 24px;
}
@media screen and (max-width: 1200px) {
    font-size: 22px;
}
@media screen and (max-width: 992px) {
    font-size: 20px;

}
@media screen and (max-width: 768px) {
    font-size: 18px;
}
@media screen and (max-width: 576px) {
    font-size: 16px;
}
`

export const TransactionItemAmount = ({ amount }) => {
    return (
        <>
            <Container>
                <h4>${amount.toFixed(2)}</h4>
            </Container>
        </>
    )
}

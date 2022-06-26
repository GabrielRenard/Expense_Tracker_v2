import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
margin: 0 0 0 auto;
height: 55px;
justify-content: center;
align-items: center;
border: 1px solid #000;
border-radius: 0.25rem;
padding: 3px;
width: auto;
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

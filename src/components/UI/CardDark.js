import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background: #404040;
color: ${({ theme }) => theme.colors.backgroundBody};
box-shadow: inset 5px 5px 9px #343434,
            inset -5px -5px 9px #4c4c4c;
padding: 0.5rem 1rem;
`

export const CardDark = ({ className, children }) => {
    return (
        <Container className={className}>
            {children}
        </Container >
    )
}

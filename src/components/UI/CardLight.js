import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text};
box-shadow: inset 5px 5px 9px #aeaeae,
            inset -5px -5px 9px #fafafa;
padding: 0.5rem 1rem;
`

export const CardLight = ({ className, children }) => {
    return (
        <Container className={className}>
            {children}
        </Container >
    )
}

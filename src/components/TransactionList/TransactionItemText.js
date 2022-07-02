import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
    color: ${({ theme }) => theme.colors.backgroundBody};
    margin-left: 1rem;

    @media screen and (max-width: 2000px) {
  font-size: 30px;
}
@media screen and (max-width: 1200px) {
    font-size: 28px;
}
@media screen and (max-width: 992px) {
    font-size: 26px;

}
@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 576px) {
    font-size: 22px;
}

`

export const TransactionItemText = ({ text }) => {
    return (
        <>
            <Text>{text}</Text>
        </>
    )
}

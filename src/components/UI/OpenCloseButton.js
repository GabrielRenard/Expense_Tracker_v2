import React from 'react';
import { MdAdd } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Button = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem auto 0;
        padding: 0.25rem;
        font-size: 25px;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: none;
        cursor: pointer;   
`

export const OpenCloseButton = ({ onClick, toggle }) => {

    return (
        <>
            <AnimatePresence>
                {toggle && (
                    <Button
                        type="button"
                        onClick={onClick}
                        as={motion.button}
                        initial={{ rotate: 0, }}
                        animate={{ rotate: 45 }}
                        transition={{ duration: 0.5 }}
                        exit={{ rotate: 45 }}
                    >
                        <MdAdd />
                    </Button>
                )}
                {!toggle && (
                    <Button
                        type="button"
                        onClick={onClick}
                        as={motion.button}
                        initial={{ rotate: 45 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ rotate: 180 }}
                    >
                        <MdAdd />
                    </Button>
                )}
            </AnimatePresence>
        </>

    )
}
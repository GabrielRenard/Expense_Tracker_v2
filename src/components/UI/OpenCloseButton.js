import React from 'react';
import { MdAdd } from 'react-icons/md';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Button = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem auto;
        padding: 0.25rem;
        font-size: 25px;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        transform: rotate(${props => props.open ? "0deg" : "0deg"})
        display: ${props => props.close ? "none" : ""}
`

export const OpenCloseButton = ({ onClick, toggle }) => {
    return (
        <>
            {toggle && (
                <Button
                    as={motion.button}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 45 }}
                    type="button" onClick={onClick}
                >
                    <MdAdd />
                </Button>
            )}

            {!toggle && (
                <Button
                    as={motion.button}
                    initial={{ rotate: 45 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 45 }}
                    type="button" onClick={onClick}
                    close
                >
                    <MdAdd />
                </Button>
            )}
        </>

    )
}


                    //     as={motion.button}
                    //     initial={{ rotate: 45 }}
                    //     animate={{ rotate: 0 }}
                    //     exit={{ rotate: 45 }}
                    //     transition={{ duration: 1 }}
                    //     className={`${toggle ? 'close' : 'open'}`}
                    //     type="button" onClick={() => setToggle(!toggle)}
                    //     open>
                    //     <MdAdd />
                    // </Button>)
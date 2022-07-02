import React from 'react';
import { MdAdd } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Button = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem auto 0;
        padding: 0.5rem;
        font-size: 35px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        transition: 0.25s ease-in-out;
        background: linear-gradient(145deg, #e3e3e3, #bfbfbf);
box-shadow:  5px 5px 9px #aeaeae,
             -5px -5px 9px #fafafa;
            
            

        :hover {
            box-shadow:  2px 2px 4px #aeaeae,
             -2px -2px 4px #fafafa;
        }

        :active {
            box-shadow: inset 4px 4px 7px #aeaeae,
            inset -4px -4px 7px #fafafa;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.25s ease;
        }

`

export const OpenCloseButton = ({ onClick, toggle }) => {

    return (
        <>
            <AnimatePresence>
                {toggle && (
                    <Button
                        type="button"
                        onClick={onClick}
                    >
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 45 }}
                            transition={{ duration: 0.5 }}
                            exit={{ rotate: 45 }}
                        >
                            <MdAdd />
                        </motion.div>
                    </Button>
                )}
                {!toggle && (
                    <Button
                        type="button"
                        onClick={onClick}
                    >
                        <motion.div
                            initial={{ rotate: 45 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.5 }}
                            exit={{ rotate: 180 }}
                        >
                            <MdAdd />
                        </motion.div>
                    </Button>
                )}
            </AnimatePresence>
        </>

    )
}
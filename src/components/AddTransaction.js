import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { OpenCloseButton } from './UI/OpenCloseButton';


const Container = styled.div`
    border: 1px solid #000;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;

    h2 {
        margin-bottom: 1rem;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    label {
        margin: 0.5rem 0;
    }
    input {
        font-size: 18px;
    }
    .submit-btn {
        width: 50%;
        margin: 1rem auto;
        padding: 0.5rem;
    }
`
export const AddTransaction = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [toggle, setToggle] = useState(false);

    const clickHandler = () => {
        setToggle(!toggle)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            text: text,
            amount: +amount,
            date: new Date(date),
            id: Math.floor(Math.random() * 10000000)
        }
        if (text && amount && date) {
            onAdd(data);
        }
        setText('')
        setAmount('')
        setDate('')
    };

    const containerTransition = {
        hidden: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
            }
        },

        show: {
            height: 350,
            opacity: 1,
            transition: {
                duration: 0.3,

            }
        }
    }

    return (
        <>
            <AnimatePresence>
                {toggle && (
                    <motion.div
                        variants={containerTransition}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        key="show-add-transaction">
                        <Container>
                            <h2>Add transaction</h2>
                            <form onSubmit={submitHandler}>
                                <label htmlFor="text">Text</label>
                                <input
                                    type="text"
                                    id="text"
                                    placeholder="Enter task"
                                    required
                                    value={text}
                                    onChange={(e) => setText(e.target.value)} />
                                <label htmlFor="amount">Amount (+/-)</label>
                                <input
                                    type="number"
                                    id="amount"
                                    placeholder="Enter amount"
                                    required
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)} />
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={date}
                                    required
                                    onChange={(e) => setDate(e.target.value)} />

                                <button className='submit-btn' type="submit">Submit</button>
                            </form>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>

            <OpenCloseButton
                onClick={clickHandler}
                toggle={toggle} />
        </>
    )

}


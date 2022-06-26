import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { OpenCloseButton } from '../UI/OpenCloseButton';
import AppContext from '../../context/app-context';


const Container = styled.div`
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    background-color: #1d2b3a;

    h2 {
        margin-bottom: 1rem;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    .submit-btn {
        width: 30%;
        margin: 1rem auto;
        padding: 0.5rem;
        cursor: pointer;
        transition: 0.5s;
        background: rgba(255,255,255,0.25);
        border-radius: 0.25rem;
        border: none;
        font-size: 1em;
    }

    .submit-btn:hover {
        background-color: #00dfc4;
    }
    
    .inputBox {
        position: relative;
        margin: 0.3rem 3rem;
    }
    input {
        width: 100%;
        padding: 5px;
        border: 1px solid rgba(255,255,255, 0.5);
        background-color: transparent;
        border-radius: 5px;
        outline: none;
        font-size: 1.25em;
        height: 2.5rem;
        color: #fff;
        transition: 0.5s;
    }
    
    input:valid ~ label,
    input:focus ~ label {
        color: #00dfc4;
        transform: translateX(10px) translateY(-7px);
        font-size: 0.8em;
        padding: 0 10px;
        background: #1d2b3a;
        border-left: 1px solid #00dfc4;
        border-right: 1px solid #00dfc4;
        letter-spacing: 0.15em;
    }

    .inputBox:nth-child(3) input:focus ~ label,
    .inputBox:nth-child(3) input:valid ~ label {
        background: #00dfc4;
        color: #1d2b3a;
    }
    
    label {
        position: absolute;
        left: 0;
        padding: 10px;
        font-size: 1em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.5);
        pointer-events: none;
        transition: 0.5s;
    }

    input[type="date"]:invalid {
        color: transparent;
    }
    
    input[type="date"]:focus {
        color: #fff;   
    }

    input:valid,
    input:focus{
        border: 1px solid #00dfc4;
    }
`
export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [toggle, setToggle] = useState(false);

    const { addTransaction } = useContext(AppContext);

    const clickHandler = () => {
        setToggle(!toggle)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newTransaction = {
            text: text,
            amount: +amount,
            date: new Date(date),
            selected: false,
            id: Math.floor(Math.random() * 10000000)
        }
        if (text && amount && date) {
            addTransaction(newTransaction);
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
                    >
                        <Container>
                            <h2>Add transaction</h2>
                            <form onSubmit={submitHandler}>
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={text}
                                        onChange={(e) => setText(e.target.value)} />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="inputBox">
                                    <input
                                        type="number"
                                        id="amount"
                                        required
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)} />
                                    <label htmlFor="amount">Amount</label>
                                </div>
                                <div className="inputBox">
                                    <input
                                        type="date"
                                        id="date"
                                        value={date}
                                        required
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                    <label htmlFor="date">Date</label>
                                </div>
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


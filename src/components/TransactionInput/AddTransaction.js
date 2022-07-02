import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { OpenCloseButton } from '../UI/OpenCloseButton';
import AppContext from '../../context/app-context';
import { CardLight } from '../UI/CardLight';


const Container = styled(motion.div)`
    border-radius: 1.5rem;
    margin-top: 1rem;
    box-shadow: inset 5px 5px 9px #aeaeae,
            inset -5px -5px 9px #fafafa;
padding: 0.5rem 1rem;
    
@media screen and (max-width: 2000px) {
  width: 40vw;
}
@media screen and (max-width: 1200px) {
  width: 50vw;
}
@media screen and (max-width: 992px) {
  width: 60vw;
}
@media screen and (max-width: 768px) {
  width: 70vw;
}
@media screen and (max-width: 576px) {
  width: 90vw;
}

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
        transition: 0.2s ease-in-out;
        border-radius: 0.5rem;
        border: none;
        font-size: 1em;
        background: #d4d4d4;
        box-shadow:  4px 4px 6px #aeaeae,
             -4px -4px 6px #fafafa;
        color: ${({ theme }) => theme.colors.textPrimary};
        text-transform: uppercase;

    }
    .submit-btn:hover {
        box-shadow:  2px 2px 4px #aeaeae,
             -2px -2px 4px #fafafa;
    }

    .submit-btn:active {
        box-shadow: inset 4px 4px 7px #aeaeae,
            inset -4px -4px 7px #fafafa;
        letter-spacing: 2px;
    }
    
    .inputBox {
        position: relative;
        margin: 0.3rem 3rem;
    }
    input {
        width: 100%;
        padding: 5px;
        background-color: transparent;
        border: none;
        border-radius: 5px;
        outline: none;
        font-size: 1.25em;
        height: 2.5rem;
        color: #222222;
        transition: 0.5s;
        box-shadow: inset 4px 4px 7px #aeaeae,
            inset -4px -4px 7px #fafafa;
        
    }
    
    input:valid ~ label,
    input:focus ~ label {
        color: ${({ theme }) => theme.colors.textPrimary};
        transform: translateX(10px) translateY(-7px);
        font-size: 0.8em;
        padding: 0 10px;
        background: ${({ theme }) => theme.colors.backgroundBody};
        letter-spacing: 0.15em;
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.colors.textPrimary}
    }

    .inputBox:nth-child(3) input:focus ~ label,
    .inputBox:nth-child(3) input:valid ~ label {
        background: ${({ theme }) => theme.colors.textPrimary};
        color: ${({ theme }) => theme.colors.backgroundBody};
    }
    
    label {
        position: absolute;
        left: 0;
        padding: 10px;
        font-size: 1em;
        text-transform: uppercase;
        color: rgba(0,0,0, 0.4);
        pointer-events: none;
        transition: 0.5s;
    }

    input[type="date"]:invalid {
        color: transparent;
    }
    
    input[type="date"]:focus {
        color: #404040;   
    }

    input:valid,
    input:focus{
        
    }

    input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0; 
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 

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
        },

        show: {
            height: "auto",
            opacity: 1
        }
    }

    return (
        <>
            <AnimatePresence>
                {toggle && (
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
                )}
            </AnimatePresence>

            <OpenCloseButton
                onClick={clickHandler}
                toggle={toggle} />
        </>
    )

}


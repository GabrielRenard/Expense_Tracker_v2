import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { OpenCloseButton } from "./UI/OpenCloseButton";

const Container = styled.div`
  /* border: 1px solid #000; */
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  background: #e0e0e0;
box-shadow: inset 7px 7px 14px #bababa,
            inset -7px -7px 14px #ffffff;

  h2 {
    margin-top: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 0.5rem 0;
    color: rgba(0, 0, 0, 0.75);
  }
  input {
    font-size: 24px;
    border: none;
    padding: 0.25rem;
    border-radius: 0.25rem;
    outline: none;
background: #e0e0e0;
box-shadow: inset 7px 7px 5px #bababa,
            inset -7px -7px 5px #ffffff;
  }
  .submit-btn {
    width: 30%;
    cursor: pointer;
    margin: 1rem auto;
    padding: 0.5rem;
    font-size: 1.25rem;
    border: none;
    border-radius: 50px;
background: linear-gradient(145deg, #f0f0f0, #cacaca);
box-shadow:  7px 7px 14px #b3b3b3,
             -7px -7px 14px #ffffff;
    /* border-radius: 50px;
    box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),
      -6px -6px 10px rgba(255, 255, 255, 0.5),
      6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15); */
  }
    
  }
  button {
    transition: 0.2s ease-in-out;
    box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),
      -6px -6px 10px rgba(255, 255, 255, 0.5),
      6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
  }

  button:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6),
      -2px -2px 4px rgba(255, 255, 255, 0.4),
      2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  button:active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7),
      inset -2px -2px 4px rgba(255, 255, 255, 0.5),
      inset 2px 2px 2px rgba(255, 255, 255, 0.075),
      inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  const submitHandler = e => {
    e.preventDefault();
    const data = {
      text: text,
      amount: +amount,
      date: new Date(date),
    };
    if (text && amount && date) {
      onAdd(data);
    }
    setText("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <OpenCloseButton onClick={clickHandler} toggle={toggle} />
      <AnimatePresence>
        {toggle && (
          <Container
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2>Add transaction</h2>
            <form onSubmit={submitHandler}>
              <label htmlFor="text">Text</label>
              <input
                type="text"
                id="text"
                placeholder="Enter transaction"
                required
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <label htmlFor="amount">Amount (+/-)</label>
              <input
                type="number"
                id="amount"
                placeholder="Enter amount"
                required
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                required
                onChange={e => setDate(e.target.value)}
              />
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

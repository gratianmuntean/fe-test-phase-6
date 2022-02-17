import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../App.css';

//1. In the first exercise you have to increment the parent count state from the child. 
//2. After you finish 1. use the useEffect to check when the count changes, and  console.log if the value it's odd or even.

const Ex01Requirements = () => {
  return (
    <>
      <code style={{ 'width': '60%' }}>
        1. In the first exercise you have to increment the parent count state from the child.
      </code>
      <br />
      <code style={{ 'width': '60%' }}>
        2. After you finish 1. use the useEffect to check when the count changes, and console.log if the value it's odd or even.
      </code>
    </>
  )
}

const Ex01 = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }
  const zero = () => {
    setCount(0)
  }

  useEffect(() => { count%2==0? console.log(`${count} is even`):console.log(`${count} is odd`);
  }, [count]);

  return (
    <div className="App-header">
      <Ex01Requirements />
      <Link to="/2">Go to exercise 02</Link>
      <h1>Ex 01 Katica ;) </h1>
  
      <h1>{count}</h1>
      <ChildComponent increaseOnClick={increment} count={count} /> 
      <p>Would you like to start from zero again? :) </p>
      <DeleteComponent deleteOnClick={zero} count={zero} /> 
    </div>
  )
}

const ChildComponent = ({ increaseOnClick }) => {
  return (
    <button onClick={increaseOnClick} style={{ cursor: 'pointer' }}>
      Add +1
    </button>
  )
}


const DeleteComponent = ({ deleteOnClick }) => {
  return (
    <button onClick={deleteOnClick} style={{ cursor: 'pointer' }}>
      Yes!!!
    </button>
  )
}

export default Ex01;
import React from "react";
import { Link } from "react-router-dom";

import '../App.css';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const Ex02Requirements = () => {
  return (
    <>
      <code style={{ 'width': '60%' }}>
        1. using the BASE_URL endpoint get the users and display them in a unordered list by "name username";
        hint: use the useState, useEffect hooks / map function.
      </code>
      <br />
      <code style={{ 'width': '60%' }}>
        2. after finishing the 1. add a text input and filter the displayed users list by first name or last name.
        hint: use on change event / useState/ filter function.
      </code>
    </>
  )
}

const Ex02 = () => {
  //1. using the BASE_URL endpoint get the users and display them in a unordered list by "name username";
  // hint: use the useState, useEffect hooks / map function.
  // 2. after finishing the 1. add a text input and filter the displayed users list by first name or last name.
  // hint: use on change event / useState/ filter function.
  return (
    <div className="App-header">
      <Ex02Requirements />
      <Link to="/1">Go to exercise 01</Link>
      <h1>Ex 02</h1>


      <input type='text' />
      <h2>Here comes the list</h2>
    </div>
  )
}

export default Ex02;

import React, { useEffect, useState } from "react";
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
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const fetchUsers = async () => {
      return await fetch(BASE_URL).then((res) => res.json());
  }

  useEffect(() => {
      fetchUsers().then(data => setUsers(data));
  }, [])

  return (
    <div className="App-header">
      <Ex02Requirements />
      <Link to="/1">Go to exercise 01</Link>
      <h1>Ex 02 Katica ;) </h1>


      <input type='text' 
                    id="filter" 
                    name="filter" 
                    value={filter}
                    onChange={event => setFilter(event.target.value)}/>

      <h2>Here comes the list</h2>
      <ul>
              {users.filter(user=> user?.name.includes(filter) || user?.name.toLowerCase().includes(filter)|| filter === '').map((user,index) => {
                  return (
                      <li key={index}>
                          <span>{user?.name} - </span>
                          <span>{user?.username}</span>
                      </li>
                  )
              })}
          </ul>
    </div>
  )
}

export default Ex02;

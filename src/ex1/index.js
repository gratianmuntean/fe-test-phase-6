import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

//1. In the first exercise you have to increment the parent count state from the child.
//2. After you finish 1. use the useEffect to check when the count changes, and  console.log if the value it's odd or even.

const Ex01Requirements = () => {
  return (
    <>
      <code style={{ width: '60%' }}>
        1. In the first exercise you have to increment the parent count state
        from the child.
      </code>
      <br />
      <code style={{ width: '60%' }}>
        2. After you finish 1. use the useEffect to check when the count
        changes, and console.log if the value it's odd or even.
      </code>
    </>
  )
}

const Ex01 = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    if (count > 0) {
      if (count % 2 == 0) {
        console.log(`${count}: Value it's even `)
      } else {
        console.log(`${count}: Value it's odd `)
      }
    }
  })

  return (
    <div className='App-header'>
      <Ex01Requirements />
      <Link to='/2'>Go to exercise 02</Link>
      <h1>Ex 01</h1>

      <h1>{count}</h1>
      <ChildComponent increment={increment} />
    </div>
  )
}

const ChildComponent = (props) => {
  const { increment } = props
  return (
    <button style={{ cursor: 'pointer' }} onClick={increment}>
      Add +1
    </button>
  )
}

export default Ex01

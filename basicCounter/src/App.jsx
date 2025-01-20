import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  let [isIncreaseDisabled, setIsIncreaseDisabled] = useState(false)
  let [isDecreaseDisabled, setIsDecreaseDisabled] = useState(false)
  
  const increaseValue = () => {
    if(counter < 20) {
      counter += 1
    }
    console.log("Counter : ", counter)
    setCounter(counter)
    if(counter < 20) {
      setIsIncreaseDisabled(false)
    } else {
      setIsIncreaseDisabled(true)
    }
    setIsDecreaseDisabled(false)
  }
  const decreaseValue = () => {
    if(counter > 0) {
      counter -= 1
    }
    console.log("Counter : ", counter)
    setCounter(counter)
    if(counter > 0) {
      setIsDecreaseDisabled(false)
    } else {
      setIsDecreaseDisabled(true)
    }
    setIsIncreaseDisabled(false)
  }

  return (
    <>
    <h1>Basic Counter</h1>
    <h3>Counter : {counter}</h3>
    <button onClick={increaseValue} disabled={isIncreaseDisabled} >Increase Value {counter}</button>
    <br />
    <button onClick={decreaseValue} disabled={isDecreaseDisabled} >Decrease Value {counter}</button>
    <footer>Footer : {counter}</footer>
    </>
  )
}

export default App

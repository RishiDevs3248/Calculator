import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [inputVal,setInputVal] = useState('')
  const handleClick =(e)=>{
    setInputVal(inputVal += e.target.value)
    console.log((inputVal))
  }

  const handleEval =()=>{
    try {
      setInputVal(eval(inputVal))
    }catch (error) {
      setInputVal('ERROR')
    }
  }

  const handleBack =()=>{
    try {
      setInputVal(inputVal.slice(0, -1))
    }catch (error) {
      setInputVal('ERROR')
    }
  }



  return (
    <>
      <div className='bg-red-900'>Hello Calculator</div>
      <div>
        <input type='text' value={inputVal}></input>
      </div>

      <div>
        <button onClick={(e)=>{handleClick(e)}} value={1}>1</button>
        <button onClick={(e)=>{handleClick(e)}} value={2}>2</button>
        <button onClick={(e)=>{handleClick(e)}} value={3}>3</button>
        <button onClick={(e)=>{handleClick(e)}} value={4}>4</button>
        <button onClick={(e)=>{handleClick(e)}} value={5}>5</button>
        <button onClick={(e)=>{handleClick(e)}} value={6}>6</button>
        <button onClick={(e)=>{handleClick(e)}} value={7}>7</button>
        <button onClick={(e)=>{handleClick(e)}} value={8}>8</button>
        <button onClick={(e)=>{handleClick(e)}} value={9}>9</button>
        <button onClick={(e)=>{handleClick(e)}} value={0}>0</button>
        <button onClick={(e)=>{handleClick(e)}} value={'+'}>+</button>
        <button onClick={(e)=>{handleClick(e)}} value={'-'}>-</button>
        <button onClick={(e)=>{handleClick(e)}} value={'/'}>/</button>
        <button onClick={(e)=>{handleClick(e)}} value={'*'}>*</button>
        <button onClick={()=>{handleEval()}} value={'='}>=</button>
        <button onClick={(e)=>{setInputVal('')}} value={'C'}>clear</button>
        <button onClick={(e)=>{handleBack()}} value={'B'}>Back</button>
      </div>
    </>
  )
}

export default App

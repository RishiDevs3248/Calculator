import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [inputVal, setInputVal] = useState('')
  const handleClick = (e) => {
    setInputVal(inputVal += e.target.value)
    console.log((inputVal))
  }

  const handleEval = () => {
    try {
      setInputVal(eval(inputVal))
    } catch (error) {
      setInputVal('ERROR')
    }
  }

  const handleBack = () => {
    try {
      setInputVal(inputVal.slice(0, -1))
    } catch (error) {
      setInputVal('ERROR')
    }
  }



  return (
    <>
      <div className='h-screen w-screen'>
        <nav className='bg-white flex justify-between h-[5%] px-[20px] items-center sticky top-0 border-b-[0.5px]'>
          <div>Calculator</div>
          <div>
            Dark mode
          </div>
        </nav>

        <div className='bg-white h-[95%] w-full flex justify-center items-center '>
          {/* card */}
          <div className='bg-[#ECECED] min-h-[700px] h-[90%] min-w-[600px] w-[40%] rounded-3xl shadow-lg'>
            {/* Screen */}
            <div className='h-[30%]'>
              <input type='text' value={inputVal}></input>
            </div>
            {/* Buttons */}
            <div className='bg-[#FCFCFC] h-[70%] rounded-3xl'>
              {/* Make an custom button component for reusability*/}
              <button className='bg-[#FDFDFD] h-[50px] w-[50px] shadow-md'>
                1
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


{/* <div>
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
      </div> */}

export default App

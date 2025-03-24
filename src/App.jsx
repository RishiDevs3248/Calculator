import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

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
        {/* <nav className='bg-white flex justify-between h-[5%] px-[20px] items-center sticky top-0 border-b-[0.5px]'>
          <div>Calculator</div>
          <div>
            Dark mode
          </div>
        </nav> */}

        <div className='bg-white h-[95%] w-full flex justify-center items-center '>
          {/* card */}
          <div className='bg-[#3B4047] min-h-[600px] h-[600px] min-w-[400px] w-[400px] rounded-3xl shadow-lg drop-shadow-3xl'>
            {/* Screen */}
            <div className='h-[30%] flex justify-center flex-col items-center'>
              <input type='text' className='bg-white h-[50%] w-[80%] rounded-full text-right px-[30px] text-2xl shadow-3xl' value={inputVal}></input>
            </div>
            {/* Buttons */}
            <div className='bg-[#3B4047] h-[70%] rounded-3xl p-[20px] pt-[0px] flex flex-col justify-evenly'>
              <div className='flex justify-evenly'>
                <Button text="C" value="C" Color="text-[#93E9C7]" onClick={(e)=>{setInputVal('')}}></Button>
                <Button text="M" value="M" Color="text-[#93E9C7]" onClick={(e)=>{handleBack()}}></Button>
                <Button text="%" value="%" Color="text-[#93E9C7]" onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="/" value="/" Color="text-[#93E9C7]" onClick={(e)=>{handleClick(e)}}></Button>
              </div>
              <div className='flex justify-evenly'>
                <Button text="7" value="7" Color="text-[#A1A0A4]" onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="8" value="8" Color="text-[#A1A0A4]" onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="9" value="9" Color="text-[#A1A0A4]" onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="x" value="*" Color="text-[#93E9C7]" onClick={(e)=>{handleClick(e)}}></Button>
              </div>
              <div className='flex justify-evenly'>
                <Button text="4" value="4" Color="text-[#A1A0A4]" onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="5" value="5" Color="text-[#A1A0A4]" onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="6" value="6" Color="text-[#A1A0A4]" onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="-" value="-" Color="text-[#93E9C7]" onClick={(e)=>{handleClick(e)}}></Button>
              </div>
              <div className='flex justify-evenly'>
                <Button text="1" value="1" Color="text-[#A1A0A4]" onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="2" value="2" Color="text-[#A1A0A4]" onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="3" value="3" Color="text-[#A1A0A4]" onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="+" value="+" Color="text-[#93E9C7]" onClick={(e)=>{handleClick(e)}}></Button>
              </div>
              <div className='flex justify-evenly'>
                <Button text="0" value="0" Color="text-[#A1A0A4]" width='b' onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="," value="," Color="text-[#A1A0A4]" onClick={(e)=>{handleClick(e)}}></Button>
                <Button text="=" value="=" Color="text-[#93E9C7]" onClick={()=>{handleEval()}}></Button>
              </div>
              

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

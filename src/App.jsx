import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("") 
const useDebounce =(text,delay)=>
  {
    const [dtext, setDtext] = useState(text)

    useEffect(() => {
      const timer = setTimeout(()=>{
        setDtext(text)
      },delay)

      return () =>
        {
          clearTimeout(timer)
        }
    }, [text,delay])
    return dtext
  }

  const Dtexted = useDebounce(text,1000)

  const handleInput = (e)=>
    {
      setText(e.target.value)
    }

  return (
    <>
    <p>Debouncing is a strategy used to improve the performance of a feature by controlling the time at which a function should be executed. Debouncing accepts a function and transforms it in to an updated (debounced) function so that the code inside the original function is executed after a certain period of time</p>
  <input onChange={handleInput} type="search" name="search" id="search" />
  <p>Debounced Text</p>
  <p>{Dtexted}</p>
    </>
  )
}

export default App

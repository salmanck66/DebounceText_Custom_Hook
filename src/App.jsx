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
  <input onChange={handleInput} type="search" name="search" id="search" />
  <p>Debounced Text</p>
  <p>{Dtexted}</p>
    </>
  )
}

export default App

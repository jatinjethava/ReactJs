import { useState } from 'react'
import './App.css'
import { Card } from './Components/Header/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Card user={"Jatin Jethava"} image={"eliphant.jpg"} />
        <Card user={"Yasdip Jethava"} image={"banana.avif"} />
        <Card user={"kalpesh Jethava"} image={"wall.avif"} />
      </div>
    </>
  )
}

export default App

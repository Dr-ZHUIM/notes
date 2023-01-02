import { useState } from 'react'
import fineGrainedReactivity from './utils/observer/fineGrainedReactivity'
import './App.css'

function App() {

  const [count,setCount] = fineGrainedReactivity.useState(0)
  setCount(2)
  return (
    <div className="App">
      {count()}
    </div>
  )
}

export default App

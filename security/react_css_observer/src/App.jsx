import { useState } from 'react'

function App() {

  const [text, setText] = useState('');

  const setInput = (e) => {
    setText(e.target.value)
  };

  return (<input type="password" onChange={setInput} value={text} ></input>)

}

export default App

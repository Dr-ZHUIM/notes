import { useMouse, useWidth } from './myHooks'

function App() {

  const w = useWidth();

  const { x, y } = useMouse();

  return (
    <div className="App">
      {w}
      <div>x:{x} y:{y}</div>
    </div>
  )
}

export default App

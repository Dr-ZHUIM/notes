import { useMouse, useWidth } from './myHooks'

function MyHooksApp() {

  const w = useWidth();

  const { x, y } = useMouse();

  return (
    <div className="App">
      {w}
      <div>x:{x} y:{y}</div>
    </div>
  )
}

export default MyHooksApp

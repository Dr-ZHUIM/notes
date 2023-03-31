import { useState, useDebugValue, useCallback } from "react";

function useCount(init: number) {
  const [count, setCount] = useState(0);
  useDebugValue(count, (count) => count + "pieces");
  const handleCount = useCallback(() => {
    setCount((v) => v + 1);
  }, []);
  return { count, handleCount };
}

export default function DebugValueExample() {
  const { count, handleCount } = useCount(10);
  return (
    <div>
      <span>Your count is:</span>
      {count}
      <div>
        <button onClick={handleCount}>increase one</button>
      </div>
    </div>
  );
}


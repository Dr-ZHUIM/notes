import { useState, useCallback } from "react";
import { debounce, throttle } from "../../utils/utils";
function Counter() {
  const [debounceCount, setDebounceCount] = useState(0);
  const [noramlCount, setNormalCount] = useState(0);

  const handleDebounceClick = useCallback(
    debounce(
      () => {
        setDebounceCount((prev) => prev + 1);
      },
      1000,
      { leading: true, trailing: false, maxWait: 500 }
    ),
    []
  );

  return (
    <div className="counter-group">
      <div className="counter">
        <button onClick={() => setNormalCount((prev) => prev + 1)}>
          Normal Click
        </button>
        <h1>{noramlCount}</h1>
      </div>
      <div className="counter">
        <button onClick={handleDebounceClick}>Debounce Click (500ms)</button>
        <h1>{debounceCount}</h1>
      </div>
    </div>
  );
}

export default Counter;

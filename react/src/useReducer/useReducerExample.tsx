import React, { useReducer, useState } from "react";

interface Action {
  type: string;
  payload: number;
}

interface State {
  count: number;
}

function handleCountReducer(state: State, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + payload,
      };
    case "DECREASE":
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
}

export default function UseReducerExample() {
  const [state, dispatchCount] = useReducer(handleCountReducer, { count: 0 });

  const handleIncreaseCount = (payload: number) => {
    dispatchCount({ type: "INCREASE", payload });
  };

  const handleDecreaseCount = (payload: number) => {
    dispatchCount({ type: "DECREASE", payload });
  };

  return (
    <div>
      Count: {state.count}
      <button onClick={() => handleIncreaseCount(5)}>Count +5</button>
      <button onClick={() => handleDecreaseCount(5)}>Count -5</button>
    </div>
  );
}


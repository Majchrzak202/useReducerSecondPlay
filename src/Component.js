import React, { useReducer } from "react";

const stateReducer = (state, action) => {
    if (action.type === 'INCREMENT') {
        return {value: state.value + 1}
    }
    if (action.type === "DECREMENT") {
        return {value: state.value - 1}
    }
    if (action.type === "RESET") {
        return {value: 0 }
    }
    return {value:0}
}

const Component = () => {
  /* const [state, setState] = useState(0); */

  const [appState, dispatchState] = useReducer(stateReducer, {value: 0})





  const incrementHandler = () => {
      /* setState(state + 1 ) */
    dispatchState({type: "INCREMENT"})
  };

  const decrementHandler = () => {
      /* setState( state - 1) */
    dispatchState({type: "DECREMENT"})
  };

  const resetHandler = () => {
      /* setState(0) */
    dispatchState({type: "RESET"})
  };

  return (
    <div>
      <div>
        <button onClick={incrementHandler}>Increment! </button>
        <button onClick={decrementHandler}>Decrement! </button>
        <button onClick={resetHandler}>Reset!</button>
      </div>
      <div>{appState.value}</div>
    </div>
  );
};

export default Component;

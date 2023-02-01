// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js
import * as React from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload}
    case 'decrement':
      return {...state, count: state.count - action.payload}
    case 'changeStep':
      return {...state, step: action.payload}
    default:
      throw new Error('unknown action type')
  }
}

function Counter({initial = {count: 0, step: 1}}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initial)
  //const [count, setCount] = React.useState(initial)
  // const [step, setStep] = React.useState(initStep)
  const [state, dispatch] = React.useReducer(reducer, initial)

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount

  //const increment = () => setCount(count + step)
  //return <button onClick={increment}>{count}</button>
  const increment = () => dispatch({type: 'increment', payload: state.step})
  const decrement = () => dispatch({type: 'decrement', payload: state.step})
  const changeStep = e => {
    let num = +e.target.value ?? 1
    if (isNaN(num)) num = 1
    dispatch({type: 'changeStep', payload: num ?? 1})
  }
  return (
    <>
      <input value={state.step} onChange={changeStep} />
      <button onClick={increment}>{state.count}</button>
      <button onClick={decrement}>-</button>

      {state.count}
    </>
  )
}

function App() {
  return <Counter />
}

export default App

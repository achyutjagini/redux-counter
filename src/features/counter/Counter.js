/*This is a React functional component that uses the useSelector 
and useDispatch hooks from the react-redux library to interact with
the counter key in the Redux store.

The useSelector hook is used to select and retrieve the current value
of the count property from the counter key in the Redux store. It takes 
a function as its argument that receives the entire Redux store state and 
returns the part of the state that the component needs. In this case, it
returns the count property of the counter key in the state.

The useDispatch hook is used to get a reference to the dispatch function, 
which can be used to dispatch actions to update the state of the counter 
key in the Redux store. The increment and decrement functions are imported
from the counterSlice.js file and are used as arguments for the dispatch 
function to update the state by incrementing or decrementing the 
count property of the counter key.

Finally, the component returns JSX that displays the current
value of the count property from the Redux store, along with
buttons that dispatch the increment and decrement actions when clicked.
*/
import { useSelector, useDispatch } from 'react-redux'

import {
  increment,
  decrement,
  reset,
  incrementByAmount

}
  from './counterSlice'

import { useState } from 'react'

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
   
  const [incrementAmount,setIncrementAmount]=useState(0)

  const addValue=Number(incrementAmount)||0


  const dispatch = useDispatch();

  const resetAll=()=>{
    setIncrementAmount(0)
    dispatch(reset())
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(reset())}> reset </button>
      </div>

      <input type='text' value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}></input>
      
      <div>
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add amount</button>
        
        <button onClick={resetAll}>Reset All</button>

      </div>


    </section>
  )
}

export default Counter

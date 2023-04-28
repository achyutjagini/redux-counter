/*This code creates a Redux slice using the createSlice function
 from the @reduxjs/toolkit package.

A Redux slice is a collection of Redux-related logic for a single feature of an application, 
such as a counter, and includes the reducer function and action creators.

The createSlice function takes an object as its argument that includes a name property, 
which is the name of the slice, and a reducers property, which is an object that defines
the actions and their corresponding reducer logic.

In this code, the slice is named counter, and the initial state is set to an object
with a count property initialized to 0. There are four reducers defined 
in the reducers object:

increment: increments the count property by 1
decrement: decrements the count property by 1
reset: resets the count property to 0

incrementByAmount: increments the count property by a certain amount 
specified in the payload property of the action

The createSlice function returns an object that includes an actions 
property with the action creators for the reducers defined in the 
reducers object, and a reducer property that is the reducer function
that handles the actions. In this code, the increment and decrement
actions are extracted from the actions property using destructuring,
and the counterSlice.reducer is exported as the default export, which
can be imported and combined with other reducers to create a Redux store.

The name counterReducer is not used in the CounterSlice.js file, but it is used in the store.js file to reference the reducer function generated by the counterSlice object.

When you create a Redux store using the configureStore function from the @reduxjs/toolkit library, you need to pass in an object that specifies the reducers for each key in the Redux store. In this case, the counterReducer key is assigned the value of the counterReducer function that is generated by the counterSlice object.

Even though the counterSlice object does not use the name counterReducer explicitly, it still generates a reducer function that can be assigned to a key in the Redux store object. 
This is because the createSlice function from @reduxjs/toolkit library generates a reducer function automatically based on the initial state and reducer functions defined in the counterSlice object.

So, in short, the counterReducer key in the store.js file is referencing the reducer function generated by the counterSlice object in the CounterSlice.js file, even though the name counterReducer is not used explicitly in the CounterSlice.js file.

*/


//store not imported here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}
export const counterSlice = createSlice(
    {
        name: 'counter',
        initialState,

        reducers: {
            increment: (state) => {
                state.count += 1
            },
            decrement: (state) => {
                state.count -= 1
            },

            reset: (state) => {
                state.count = 0;

            },

            incrementByAmount: (state, action) => {
                state.count += action.payload;
            }
        }
    })
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;


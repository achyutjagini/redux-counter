/*This code is setting up a Redux store using the configureStore function from
the @reduxjs/toolkit package.

The configureStore function takes a configuration 
object as its argument, which specifies how the store should be set up.

The configuration object has a reducer property that is an object containing the 
reducers that will be used in the store.

In this case, there is only one 
reducer specified, counterReducer, which is imported from the 
../features/counter/counterSlice file.

The counterReducer is then assigned to the counter key in 
the reducer object.

This means that any actions dispatched 
to the counter key will be handled by the counterReducer.

In Redux, actions are plain JavaScript objects that describe a change
in the application state. When an action is dispatched, it is sent to 
the Redux store, which passes it to the reducer function that 
corresponds to the action's type. The reducer function then takes the
current state and the action, and returns the new state that results
from applying the action.

In the code you provided earlier, the
store instance has a reducer property that
is an object containing the counterReducer function, 
which is responsible for handling actions 
related to the counter key.

This means that any action dispatched to the counter key,
for example by calling the increment or decrement action
creators defined in the counterSlice object, will be handled 
by the counterReducer function. The counterReducer function 
will receive the current state of the counter key, along 
with the action object, and will return the new state 
based on the logic defined in the reducer function.


By using the configureStore function to set up the Redux store, 
the counterReducer
function is automatically included as part of the overall reducer 
function used by the store,

which means that it will be called whenever 
an action related to the counter key is dispatched, and the state of 
the counter key will be updated accordingly.
Finally, the configureStore function returns a Redux store 
instance, which is assigned to the store constant using
ES6's export statement.

This allows other modules in the application
to import and use the store instance to interact with 
the global state managed by Redux.*/

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

//doesn't hurt to have comma even if only one in here
export const store = configureStore({

    // key-counter reducer-counterReducer
    reducer: {
        counter: counterReducer,

    }

})



//impot the createSlice function from the Redux toolkit
import { createSlice } from "@reduxjs/toolkit";

//counterSlice is the variable that equals the result of the createSlice function
//the createSlice function contains an object with a name for the slice, the initial state value of the slice, and the reducers - which defines a set of actions that cen be dispatched to change the state.
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

//createSlice has generated an 'actions' property that contains any and all actions in the 'reducers' object. So I am exporting these.
export const { increment, decrement } = counterSlice.actions;

//export the reducer function which listens to the actions and updates the state accordingly.
export default counterSlice.reducer;

//configureStore is a function provided by Redux Toolkit. It is used to configure/create a Redux store. A Redux store is the central data store in a Redux application.
//importing the coungterReducer which is resposible for managing the state of the counter.
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Counters/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

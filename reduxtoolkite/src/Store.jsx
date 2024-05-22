import{ configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counterSlice";

const Store=configureStore({
    reducer:{
        myCounter:counterReducer
    }
})
export default Store;
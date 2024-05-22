import{ configureStore } from '@reduxjs/toolkit';
import colorReducer from './ColorSlice'
const Store=configureStore({
    reducer:{
        myColor:colorReducer
    }
})
export default Store;
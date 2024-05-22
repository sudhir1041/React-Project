import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:"todo",

    initialState:{
        Task:[]
        

    },
    
    reducers:{
        addTask:(state,action)=>{
            state.Task.push(action.payload)
         } 
    }

})
export const{addTask}=TodoSlice.actions;
export default TodoSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:"todo",

    initialState:{
        Task:[]
        

    },
    
    reducers:{
        addTask:(state,action)=>{
            state.Task.push(action.payload)
         } ,

         deleteTask:(state,action)=>{
            state.Task = state.Task.filter((key)=>key.id!==action.payload.id);
         },
         taskComplete:(state,action)=>{
            for(var i=0; i<state.Task.length;i++)
                {
                    if (state.Task[i].id==action.payload.id)
                        {
                            state.Task[i].status=false;
                        }
                }
         },
         reOpen:(state,action)=>{
            for(var i=0; i<state.Task.length;i++)
                {
                    if (state.Task[i].id==action.payload.id)
                        {
                            state.Task[i].status=true;
                        }
                }
         },
         
    }

})
export const{addTask,deleteTask,taskComplete,reOpen}=TodoSlice.actions;
export default TodoSlice.reducer;
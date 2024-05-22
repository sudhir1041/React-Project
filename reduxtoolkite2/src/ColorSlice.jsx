import { createSlice } from "@reduxjs/toolkit";

const ColorSlice=createSlice({
    name:"myColor",

    initialState:{
        color:"yellow"
    },
    
    reducers:{
        bgChange:(state,action)=>{
            state.color=action.payload;
         } 
    }

})
export const{bgChange}=ColorSlice.actions;
export default ColorSlice.reducer;
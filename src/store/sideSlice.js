import { createSlice } from "@reduxjs/toolkit";

const sideSlice = createSlice({
    name:"app",

    initialState: {
         isToggle :false,
    },

    reducers: { 
       toggleBar: (state)=> {
        state.isToggle = !state.isToggle;
       },
    },
});

export const {toggleBar} = sideSlice.actions;
export  default sideSlice.reducer;
    
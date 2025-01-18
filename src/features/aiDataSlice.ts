import { createSlice } from "@reduxjs/toolkit";

const AIData = createSlice({
    name:'aiData',
    initialState:{
        data:{}
    },
    reducers:{
        setData:(state, payload)=>{
            
            state.data=payload.payload
        }
    }
})

export const {setData}=AIData.actions
export default AIData.reducer

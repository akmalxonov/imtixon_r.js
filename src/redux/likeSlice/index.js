import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: JSON.parse(localStorage.getItem("liked")) || [],
}
const likeSlice = createSlice({
    name:"like",
    initialState,
    reducers:{
        "toggleLike":(state,{payload}) =>{
            const exists = state.data.find(item => item.id === payload.id);
            let updatedData;

            if (exists) {
                updatedData = state.data.filter(item => item.id !== payload.id);
            } else {
                updatedData = [...state.data, payload];
            }

            localStorage.setItem("liked", JSON.stringify(updatedData));
            state.data = updatedData;
        }
    }
})  

export const {toggleLike} = likeSlice.actions;
export default likeSlice.reducer
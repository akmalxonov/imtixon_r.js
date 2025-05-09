import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data: JSON.parse(localStorage.getItem("data")) || [],
};
const cardSlice = createSlice({
    name: "shop",
    initialState,
    reducers:{
        "addProduct":(state,{payload})=> {
            const existingProduct = state.data.find(item => item.id === payload.id);
            let updatedData;
            const unitPrice = payload.discount || payload.price;

            if (existingProduct) {
                updatedData = state.data.map(item =>
                    item.id === payload.id
                        ? {
                            ...item,
                            count: item.count + 1,
                            userPrice: (item.count + 1) * unitPrice, 
                        }
                        : item
                );
            } else {
                const newProduct = {
                    ...payload,
                    count: 1,
                    userPrice: unitPrice,
                };
                updatedData = [...state.data, newProduct];
            }
            state.data = updatedData;
            localStorage.setItem("data", JSON.stringify(updatedData));
        },
         "increment":(state,{payload})=> {
            const updatedDataIncrement = state.data.map(item => {
                if (item.id === payload) {
                    const unitPrice = item.discount || item.price;
                    return {
                        ...item,
                        count: item.count + 1,
                        userPrice: (item.count + 1) * unitPrice,
                    };
                }
                return item;
            });
            state.data = updatedDataIncrement; 
            localStorage.setItem("data", JSON.stringify(updatedDataIncrement));
        },
        "decrement":(state,{payload})=>{
            const updatedDataDecrement = state.data.map(item => {
                if (item.id === payload) {
                    const unitPrice = item.discount || item.price;
                    return {
                        ...item,
                        count: item.count === 1 ? 1 : item.count - 1, 
                        userPrice: item.count === 1
                            ? unitPrice
                            : (item.count - 1) * unitPrice,
                    };
                }
                return item;
            });
            state.data = updatedDataDecrement; 
            localStorage.setItem("data", JSON.stringify(updatedDataDecrement));
        },
        "deleteProduct":(state,{payload}) =>{
            const deleteProduct = state.data.filter(item => item.id !== payload);
            state.data = deleteProduct;
            localStorage.setItem("data", JSON.stringify(deleteProduct));
        }
    }
});

export const { addProduct, increment, decrement, deleteProduct } = cardSlice.actions;
export default cardSlice.reducer;


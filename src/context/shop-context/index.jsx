import { createContext, useReducer } from "react";

const ShopContext = createContext({});
const initialState = {
    data: JSON.parse(localStorage.getItem("data")) || [],
};
const reducer = (state, action) => {
    switch (action.type) {
        case "add_product": {
            const existingProduct = state.data.find(item => item.id === action.data.id);
            let updatedData;
            const unitPrice = action.data.discount || action.data.price;

            if (existingProduct) {
                updatedData = state.data.map(item =>
                    item.id === action.data.id
                        ? {
                            ...item,
                            count: item.count + 1,
                            userPrice: (item.count + 1) * unitPrice, 
                        }
                        : item
                );
            } else {
                const newProduct = {
                    ...action.data,
                    count: 1,
                    userPrice: unitPrice,
                };
                updatedData = [...state.data, newProduct];
            }
            localStorage.setItem("data", JSON.stringify(updatedData));
            return { data: updatedData };
        }
        case "increment": {
            const updatedDataIncrement = state.data.map(item => {
                if (item.id === action.id) {
                    const unitPrice = item.discount || item.price;
                    return {
                        ...item,
                        count: item.count + 1,
                        userPrice: (item.count + 1) * unitPrice,
                    };
                }
                return item;
            });

            localStorage.setItem("data", JSON.stringify(updatedDataIncrement));
            return { data: updatedDataIncrement };
        }
        case "decrement": {
            const updatedDataDecrement = state.data.map(item => {
                if (item.id === action.id) {
                    const unitPrice = item.discount || item.price;
                    return {
                        ...item,
                        count: item.count === 1 ? 1 : item.count - 1, // 1 dan pastga tushmasin
                        userPrice: item.count === 1
                            ? unitPrice
                            : (item.count - 1) * unitPrice,
                    };
                }
                return item;
            });

            localStorage.setItem("data", JSON.stringify(updatedDataDecrement));
            return { data: updatedDataDecrement };
        }
        case "delete": {
            const deleteProduct = state.data.filter(item => item.id !== action.id);
            localStorage.setItem("data", JSON.stringify(deleteProduct));
            return { data: deleteProduct };
        }
        default:
            return state;
    }
};
const ShopContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ShopContext.Provider value={{ state, dispatch }}>
            {children}
        </ShopContext.Provider>
    );
};
export { ShopContext, ShopContextProvider };
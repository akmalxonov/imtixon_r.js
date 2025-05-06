import { createContext, useReducer } from "react";

const LikeContext = createContext({});
const initialState = {
    data: JSON.parse(localStorage.getItem("liked")) || [],
};
const reducer = (state, action) => {
    switch (action.type) {
        case "toggle_like": {
            const exists = state.data.find(item => item.id === action.data.id);
            let updatedData;

            if (exists) {
                updatedData = state.data.filter(item => item.id !== action.data.id);
            } else {
                updatedData = [...state.data, action.data];
            }

            localStorage.setItem("liked", JSON.stringify(updatedData));
            return { data: updatedData };
        }

        default:
            return state;
    }
};

const LikeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <LikeContext.Provider value={{ state, dispatch }}>
            {children}
        </LikeContext.Provider>
    );
};

export { LikeContext, LikeContextProvider };
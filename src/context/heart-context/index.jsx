import { createContext, useReducer } from "react";

// Context yaratish
const LikeContext = createContext({});

// Boshlang‘ich state
const initialState = {
    data: JSON.parse(localStorage.getItem("liked")) || [],
};

// Reducer funksiyasi
const reducer = (state, action) => {
    switch (action.type) {
        case "toggle_like": {
            const exists = state.data.find(item => item.id === action.data.id);
            let updatedData;

            if (exists) {
                // Agar mavjud bo‘lsa, o‘chiramiz
                updatedData = state.data.filter(item => item.id !== action.data.id);
            } else {
                // Mavjud bo‘lmasa, qo‘shamiz
                updatedData = [...state.data, action.data];
            }

            localStorage.setItem("liked", JSON.stringify(updatedData));
            return { data: updatedData };
        }

        default:
            return state;
    }
};

// Context Provider komponenti
const LikeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <LikeContext.Provider value={{ state, dispatch }}>
            {children}
        </LikeContext.Provider>
    );
};

export { LikeContext, LikeContextProvider };
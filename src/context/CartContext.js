// src/context/CartContext.js
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
    items: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM": {
            const existing = state.items.find((i) => i.id === action.payload.id);
            if (existing) {
                return {
                    ...state,
                    items: state.items.map((i) =>
                        i.id === action.payload.id
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
            };
        }
        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter((i) => i.id !== action.payload),
            };
        case "CLEAR_CART":
            return initialState;
        case "UPDATE_QUANTITY":
            return {
                ...state,
                items: state.items.map((i) =>
                    i.id === action.payload.id
                        ? { ...i, quantity: action.payload.quantity }
                        : i
                ),
            };
        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
    const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
    const updateQuantity = (id, quantity) =>
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    const clearCart = () => dispatch({ type: "CLEAR_CART" });

    return (
        <CartContext.Provider
            value={{ items: state.items, addItem, removeItem, updateQuantity, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);

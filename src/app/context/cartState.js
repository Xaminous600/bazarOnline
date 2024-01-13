'use client'

import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialStateCart = [];

function reducerCart(state, action){
    switch(action.type){
        case 'ADD_TO_CART':{
            return [...state, action.payload];
        }

        case 'REMOVE_FROM_CART':{
            return state.filter(item => item.id !== action.payload.id);
        }

        return state;
    }
}

export function CartProvider({children}){

    const [state, dispatch] = useReducer(reducerCart, initialStateCart);

    function addToCart(item){
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        })
    }

    function removeFromCart(item){
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: item
        })
    }

    return(
        <CartContext.Provider value={{
            initialStateCart: state,
            addToCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
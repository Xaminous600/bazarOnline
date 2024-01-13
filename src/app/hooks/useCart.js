'use client'

import { useContext } from "react";
import { CartContext } from "../context/cartState";

export function useCart(){
    const {initialStateCart, addToCart, removeFromCart} = useContext(CartContext)

    function productInCart(product){
        return initialStateCart.some(item => item.id === product.id);
    }

    return {initialStateCart, addToCart, removeFromCart, productInCart};
}
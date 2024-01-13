'use client'

import styles from './footer.module.css';
import { useCart } from '../hooks/useCart';
import { useFilter } from '../hooks/useFilter';

export function Footer(){
    const {initialStateCart, addToCart, removeFromCart} = useCart();
    const {initialStateFilters, changeCategory, changeSearchBox} = useFilter();


    return (
        <div className={styles.footer}>
            <h1>{JSON.stringify(initialStateFilters)}</h1>
        </div>
    )
}
'use client'
import { useCart } from "../hooks/useCart"
import styles from './products.module.css'

function Product({product}){

    return(
        <div className={styles.product}>
            <div className={styles.productImage}>
                <img src={product.thumbnail} />
            </div>
            <div className={styles.productDescription}>
                <span>{product.title}</span>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default function shopCart(){
    const {initialStateCart} = useCart();

    return(
        <div className={styles.listProducts}>
            <ul>
                {initialStateCart.map(item => {
                    return (
                        <li key={item.id} >
                            <Product product={item}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
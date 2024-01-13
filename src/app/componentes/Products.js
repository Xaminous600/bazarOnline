'use client'
import styles from './products.module.css'
import { useCart } from '../hooks/useCart'
import Link from 'next/link';

function Product({product}){
    const {initialStateCart, addToCart, removeFromCart, productInCart} = useCart();
    
    return(
        <div class="flex font-sans border-solid border-2 hover:drop-shadow-2xl h-64 bg-slate-50 rounded-3xl">
            <div class="flex-none w-48 relative">
                <img class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" src={product.thumbnail} />
            </div>
            <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                    <h1 class="flex-auto text-lg font-semibold text-slate-900 line-clamp-1">
                        {product.title}
                    </h1>
                    <div class="text-lg font-semibold text-slate-500">
                        {product.price}$
                    </div>
                    <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        In stock
                    </div>                
                </div>
                <div class="flex items-baseline my-2">
                    <p class="overflow-hidden line-clamp-3">{product.description}</p>
                </div>
                <div class="flex space-x-2 mb-4 text-sm font-medium relative ">
                    <div class="flex space-x-4 bottom-0">
                        <Link href={'/' + product.id}>
                            <button class="h-10 px-6 font-semibold rounded-md bg-black text-white">
                            Buy now
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default function Products({products}){

    return(
        <div className={styles.listProducts}>
            <ul>
                {products.map(item => {
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
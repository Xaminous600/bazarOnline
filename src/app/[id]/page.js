'use client'

import products from '../data/products.json'
import Link from 'next/link';
import { useCart } from '../hooks/useCart';
import { useEffect, useState } from 'react';

export default function ProductId({params}){
    const {id} = params;
    const {addToCart} = useCart();
    const product = products.products.find(item => item.id.toString() === id);

    let valorOriginal = product.price / (1-(product.discountPercentage / 100));

    return(
        <div class='flex w-auto mt-2 flex-col items-center shadow-2xl rounded-lg mx-32'>
            <p class='font-extralight'> 
                <Link href='/'>
                    Home 
                </Link>   

                {"   >   "}    
                
                {product.category}

                {"   >   "}    

                {product.title} 
            </p>

            <div class='flex flex-row py-10 gap-10'>
                <div>
                    <img src={product.thumbnail}/>
                </div>

                <div>
                    <div class='flex flex-row gap-4 '>
                        <div>
                            <h1 class='font-semibold text-3xl font-serif'>{product.title}</h1>
                        </div>
                        <div>
                            <span class='font-light line-through font-serif'>{valorOriginal.toFixed(2)}$</span>
                            <span class='font-normal text-2xl ml-2 font-serif'>{product.price}$</span>
                        </div>
                    </div>
                    <div class='flex flex-row  items-center mt-2'>
                        <svg viewBox="0 0 576 512" width="15" title="star">
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                        <svg viewBox="0 0 576 512" width="15" title="star">
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                        <svg viewBox="0 0 576 512" width="15" title="star">
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                        <svg viewBox="0 0 576 512" width="15" title="star">
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>
                        <svg viewBox="0 0 576 512" width="15" title="star">
                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                        </svg>

                        <div>
                            <span class='ml-2 font-serif font-extralight text-base'>{product.rating.toFixed(1) + '/5'}</span>
                        </div>
                    </div>
                    <section class='mt-2'>
                        <p class='font-serif italic'>{product.description}</p>
                        <div class="flex space-x-2 mb-4 text-sm font-medium relative ">
                            <div class="flex space-x-4 bottom-0 mt-5">
                                <Link href={'/shopcart'}>
                                    <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" onClick={()=>{addToCart(product)}}>
                                        Buy now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
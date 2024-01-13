'use client'
import styles from './header.module.css'
import Link from 'next/link'
import { useFilter } from '../hooks/useFilter';

export default function Header(){
    const {initialStateFilters, changeCategory, changeSearchBox} = useFilter();

    function handleSelectChange(event){
      changeCategory(event.target.value);
    }

    function handleInputChange(event){
      changeSearchBox(event.target.value);
    }

    return(
      <div>
        <header class='flex items-center w-full bg-white py-10 border-b-1 h-14 justify-center gap-12'>
          <div class='h-auto w-1/12'>
            <Link href={'/'}>
              <img src='logoHeader.svg' alt="Logo Header"/>
            </Link>
          </div>
          <div className={styles.comboBox}>
            <select onChange={handleSelectChange}>
              <option value='all'>Todas las categorías</option>
              <option value='smartphones'>Teléfonos Móviles</option>
              <option value='laptops'>Portátiles</option>
              <option value='fragrances'>Fragancias</option>
              <option value='skincare'>Skin Care</option>
              <option value='groceries'>Alimentación</option>
              <option value='home-decoration'>Decoración del hogar</option>
            </select>
          </div>
          
          <div class='w-1/3 border-2 p-2 rounded-3xl border-slate-400'>
            <input type='text' placeholder='What are you looking for?' name='Search' onChange={handleInputChange} class='w-full focus:outline-none'/>
          </div>
         
          <div class='flex flex-row bg-black h-full justify-center items-center gap-4 ml-5 '>
            <button>
              <img src="user.png" alt="Avatar" class='w-8' />
            </button>

            <Link href={'/shopcart'}>
              <img src="shopping-cart.png" alt="ShopCart" className='w-8' />
            </Link>
          </div>
        </header>
        <div class='flex items-center w-full bg-gradient-to-r from-indigo-500 py-2 border-b-1 h-14 justify-center gap-12'>
          <p class='italic decoration-gray-400 font-semibold'>Sell here what you no longer use. <span class='underline decoration-solid '>Get a profit!</span></p>
        </div>
      </div>
    )
}
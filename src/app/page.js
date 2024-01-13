'use client'

import Products from './componentes/Products'
import data from '../app/data/products.json'
import { useFilter } from './hooks/useFilter'

export default function Home() {
  const {initialStateFilters, changeCategory, changeSearchBox, filters} = useFilter();


  return (
    <div>
        <Products products={filters(data)}/>
    </div>
  )
}

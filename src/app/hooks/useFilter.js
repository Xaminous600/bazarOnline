'use client'

import { useContext } from "react";
import { FilterContext } from "../context/filterState";

export function useFilter(){
    const {initialStateFilters, changeCategory, changeSearchBox} = useContext(FilterContext);

    function containParams(titleItem){

      for(let i =0; i< initialStateFilters.searchBox.length; i++){
          if(titleItem[i].toUpperCase() !== initialStateFilters.searchBox[i].toUpperCase()){
              return false;
          }
      }

      return true;
  }

    function filters(products){
        return products.products.filter(items => {
          if(initialStateFilters.category === 'all' && initialStateFilters.searchBox === ''){
              return products;
          }
          else if(initialStateFilters.category !== 'all' && initialStateFilters.searchBox === ''){
            return items.category === initialStateFilters.category;
          }
          else if(initialStateFilters.category === 'all' && initialStateFilters.searchBox !== ''){
            return containParams(items.title.toUpperCase());
          }
          else{
            return items.category === initialStateFilters.category && containParams(items.title.toUpperCase());
          }
        })
    }


    return {initialStateFilters, changeCategory, changeSearchBox, filters};
}
'use client'

import {createContext, useReducer} from "react"

export const FilterContext = createContext();

const initialStateFilters = {
    category: 'all',
    searchBox: ''
}

function reducerFilter(state, action){
    switch(action.type){
        case 'CHANGE_CATEGORY':{
            return {
                category: action.payload,
                searchBox: state.searchBox
            };
        }

        case 'CHANGE_SEARCHBOX': {
            return{
                category: state.category,
                searchBox: action.payload
            }
        }

        return state;
    }
}

export function FilterProvider({children}){

    const [state, dispatch] = useReducer(reducerFilter, initialStateFilters);

    function changeCategory(category){
        dispatch({
            type: 'CHANGE_CATEGORY',
            payload: category
        })
    }

    function changeSearchBox(searchBox){
        dispatch({
            type: 'CHANGE_SEARCHBOX',
            payload: searchBox
        })
    }

    return(
        <FilterContext.Provider value={{
            initialStateFilters: state,
            changeCategory, 
            changeSearchBox
        }}>
            {children}
        </FilterContext.Provider>
    )
}

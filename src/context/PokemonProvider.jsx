import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'
import { baseURL } from '../helper/helper'
//NO USAR EL CONTEXT SOLO
const PokemonProvider = ({children}) => {
    const [allPokemons, setAllPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])

    const [offset, setOffset] = useState(0)

    //customHook


    //Estados para la app
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    
    
    // llamar 50 pokemons 
    const getAllPokemons = async(limit =50)=>{
        
        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()
        const  promises = data.results.map(async(pokemon)=>{
            const res = await fetch(pokemon.url)
            const data =await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setAllPokemons([...allPokemons, ...results]);
        setLoading(false)
    
    }

   // A todos
    const getGlobalPokemons = async()=>{
        
        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json()
        const  promises = data.results.map(async(pokemon)=>{
            const res = await fetch(pokemon.url)
            const data =await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setGlobalPokemons(results);
        setLoading(false)
    }

    //POR ID

    


    useEffect(()=>{
        getAllPokemons()
    },[])

    useEffect(()=>{
        getGlobalPokemons()
    },[])

 


    return (
        <PokemonContext.Provider value={{
            allPokemons,//
            globalPokemons,
     
            //loader
            loading,
            setLoading,
            //filter
            active,
            setActive,
            
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export {PokemonProvider}

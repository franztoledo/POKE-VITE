import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'

const PokemonProvider = ({children}) => {
    const [allPokemons, setAllPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    // llamar 50 pokemons 
    const getAllPokemons = async(limit =50)=>{
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()
        const  promises = data.results.map(async(pokemon)=>{
            const res = await fetch(pokemon.url)
            const data =await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setAllPokemons(results);
    
    }

   // A todos
    const getGlobalPokemons = async()=>{
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json()
        const  promises = data.results.map(async(pokemon)=>{
            const res = await fetch(pokemon.url)
            const data =await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setGlobalPokemons(results);
    } 


    useEffect(()=>{
        getAllPokemons()
    },[])

    useEffect(()=>{
        getGlobalPokemons()
    },[])

 


    return (
        <PokemonContext.Provider value={{
            numero: 0
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export {PokemonProvider}

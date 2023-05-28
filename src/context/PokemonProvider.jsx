import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'
import { useForm } from '../hook/useForm'

const PokemonProvider = ({children}) => {
    const [allPokemons, setAllPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])

    const [offset, setOffset] = useState(0)

    //customHook
    const {valueSearch, onInputChange, onResetForm}=useForm({
        valueSearch: '',
    })


    //Estados para la app
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    
    const baseURL = 'https://pokeapi.co/api/v2/'
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

    const getPokemonByID = async(id)=>{
        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json()
        return data
    }


    useEffect(()=>{
        getAllPokemons()
    },[])

    useEffect(()=>{
        getGlobalPokemons()
    },[])

 


    return (
        <PokemonContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            globalPokemons,
            getPokemonByID,
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export {PokemonProvider}

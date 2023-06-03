import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'
//NO USAR EL CONTEXT SOLO
const PokemonProvider = ({children}) => {
    const [allPokemons, setAllPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])

    const [offset, setOffset] = useState(0)

    //customHook


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

    //Filter Function + state

    const [typeSelected, setTypeSelected] = useState({
        grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
    })
    const [filteredPokemons, setFilteredPokemons] = useState([])

    const handleCheckbox= e =>{
        setTypeSelected({
			...typeSelected,
			[e.target.name]: e.target.checked,
		});
        

        if (e.target.checked) {
			const filteredResults = globalPokemons.filter(pokemon =>
				pokemon.types
					.map(type => type.type.name)
					.includes(e.target.name)
			);
			setFilteredPokemons([...filteredPokemons, ...filteredResults]);
		} else {
			const filteredResults = filteredPokemons.filter(pokemon =>
					!pokemon.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setFilteredPokemons([...filteredResults]);
		}
    }

 


    return (
        <PokemonContext.Provider value={{
            allPokemons,//
            globalPokemons,
            getPokemonByID,
            //loader
            loading,
            setLoading,
            //filter
            active,
            setActive,
            //filter checkbox
            handleCheckbox,
			filteredPokemons,
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export {PokemonProvider}

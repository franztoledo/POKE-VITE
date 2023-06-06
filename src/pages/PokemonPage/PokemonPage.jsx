import React, { useState , useContext, useEffect } from 'react'

import { PokemonContext } from '../../context/PokemonContext'
import { Link, useParams } from 'react-router-dom'
import { Loader } from '../../components'
import { baseURL, capitalize } from '../../helper/helper'
import'./PokemonPage.css'
import { PokeballIconBig } from '../../assets/icon'
import { HeightIcon, WeightIcon } from '../../assets/stats'
import { BaseStats } from '../../components/BaseStats/BaseStats'

function PokemonPage() {
    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState({})
	const [bgColor, setbgColor] = useState('')
    const getPokemonByID = async(id)=>{
        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json()
        return data
    }
    
    const {id}=useParams()
    const fetchPokemon = async (id)=>{
        const data = await getPokemonByID(id)
		const bgColor =data.types[0].type.name
		setbgColor(bgColor)
        setPokemon(data)
        setLoading(false)
	}
    useEffect(()=>{
        fetchPokemon(id)
    },[])
	console.log(pokemon.height);
    return (
        <main className={`main-pokemon ${bgColor}`}>
            {
                loading?
                (<Loader/>):
                (<>
					<div className={`header-main-pokemon`}>
						<div className='header-main-pokemon-nav'>
							<div>
								<Link to='/'>
									<img src="./../../../public/ArrowBack.svg" alt="" />
								</Link>
								<h1>{capitalize(pokemon.name)}</h1>
							</div>
							<span className={`number-pokemon`}>#{pokemon.id}</span>
						</div>
						<PokeballIconBig className="water-fond"/>
					</div>
					<div className='pokemon-info'>
						<div className='container-img-pokemon'>
							<img
								src={pokemon.sprites.other.home.front_default}
								alt={`Pokemon ${pokemon?.name}`}
							/>
						</div>
						<div className=' info-pokemon-type'>
								{pokemon.types.map(type => (
									<span key={type.type.name} className={`${type.type.name}`}>
										{type.type.name}
									</span>
								))}
						</div>
						<h1 className={`number-pokemon-${bgColor}`}>Informacion</h1>
						<div className='info-pokemon'>
							<div className='group-info'>
								<span>
									<WeightIcon className='icon-info-detail'/>
									{pokemon.height} m
								</span>
								<p>Altura</p>
							</div>
							<div className='group-info'>
								<span>
									<HeightIcon className='icon-info-detail'/>
									{pokemon.weight} kg
								</span>
								<p>Peso</p>
							</div>
						
						</div>
						<h1 className={`number-pokemon-${bgColor}`}>Estadisticas</h1>
						<BaseStats pokemon={pokemon} bgColor={bgColor}/>
					</div>
				</>)
            }

        </main>
    )
}

export  {PokemonPage}
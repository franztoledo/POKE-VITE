import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'

import { useLocation } from 'react-router-dom'
import './SearchPage.css'
import { CardPokemon } from '../../components'

function Searchpage() {
  const location = useLocation()
  console.log(location);

  const {globalPokemons}=useContext(PokemonContext)
  const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))

  return (
    <div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filteredPokemons.length}</span>
				resultados:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
  )
}

export {Searchpage}
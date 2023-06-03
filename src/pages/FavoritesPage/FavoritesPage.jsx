import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import './FavoritesPage.css'
import { PokemonList } from '../../components'
import { PokeballIconSmall } from '../../assets/icon'

function FavoritesPage() {
  return (
    <>
		<div className='nav-favorites'>
			<h3>
				POKEMONES FAVORITOS
			</h3>
			<span className='btn-clear-favorites'>
				LIMPIAR FAVORITOS
	  		</span>
		</div>
		
		{
			<div className="card-list-pokemon-fav">
				<p>AÑADE TU PRIMER POKEMON FAVORITO!</p>
				<img src='../../../public/image.svg' className='icon-info'/>
			</div>
			// <PokemonList 
			// />
		}
	</>
  )
}

export {FavoritesPage}
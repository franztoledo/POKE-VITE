import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import './FavoritesPage.css'
import { PokemonList } from '../../components'
import { PokeballIconSmall } from '../../assets/icon'
import { SessionContext } from '../../context/SessionContext'
import { CardPokemonFav } from '../../components/CardPokemon/CardPokemonFav'

function FavoritesPage() {
  const {removeFavorites}=useContext(SessionContext)
  const { favorites } = useContext(SessionContext);

  return (
    <>
		<div className='nav-favorites'>
			<h3>
				POKEMONES FAVORITOS
			</h3>
			<span className='btn-clear-favorites' onClick={()=>{
					removeFavorites();
				}}>
				LIMPIAR FAVORITOS
	  		</span>
		</div>
		
		{ favorites.length == 0 ?
			(<div className="card-list-pokemon-fav">
				<p>AÑADE TU PRIMER POKEMON FAVORITO!</p>
				<img src='../../../public/image.svg' className='icon-info'/>
			</div>
      ):(
          <PokemonList className="card-list-pokemon"  isSlider={false}>
            {favorites.map(pokemon => (
              <CardPokemonFav pokemon={pokemon} key={pokemon.id} />
            ))}
          </PokemonList>

      )
			// <PokemonList 
			// />
		}
	</>
  )
}

export {FavoritesPage}
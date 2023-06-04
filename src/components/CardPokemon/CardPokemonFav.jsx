import React, { forwardRef } from 'react'
import './CardPokemon.css'
import { Link } from 'react-router-dom'
import { capitalize } from '../../helper/helper'
import { SessionContext } from '../../context/SessionContext';
import { useContext } from 'react';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

const CardPokemonFav = forwardRef(({pokemon}, ref) => {
	const { ExistsOnFavorites, removeFavorite} = useContext(SessionContext);
  	const isFavorite = ExistsOnFavorites(pokemon.id);
    return (
		<div className={`card-pokemon ${pokemon.types[0].type.name}`} ref={ref}>
			
			<FavoriteIcon
				isFavorite={isFavorite}
				callback={() => {
					removeFavorite(pokemon.id);

				}}
			/>
				
			<Link to={`/pokemon/${pokemon.id}`} className={`card-pokemon ${pokemon.types[0].type.name}`}>
				<div className='card-img'>
					<img
						src={pokemon.image}
						alt={`Pokemon ${pokemon.name}`}
					/>
				</div>
				<div className='card-info'>
					<h3>{capitalize(pokemon.name)}</h3>
					<div className='card-types'>
						{pokemon.types.map(type => (
							<span key={type.type.name} className={type.type.name}>
								{type.type.name}
							</span>
						))}
					</div>
				</div>
			</Link>
		</div>
    )
})

export  {CardPokemonFav}
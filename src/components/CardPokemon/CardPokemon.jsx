import React from 'react'
import './CardPokemon.css'
import { Link } from 'react-router-dom'
import { capitalize } from '../../helper/helper'
import { SessionContext } from '../../context/SessionContext';
import { useContext } from 'react';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

function CardPokemon({pokemon}) {
	const { ExistsOnFavorites, addFavorite, removeFavorite} = useContext(SessionContext);
  	const isFavorite = ExistsOnFavorites(pokemon.id);
    return (
		<div className={`card-pokemon ${pokemon.types[0].type.name}`}>
			{isFavorite ? (
				<FavoriteIcon
				isFavorite={isFavorite}
				callback={() => {
					removeFavorite(pokemon.id);
				}}
				/>
				) : (
				<FavoriteIcon
				isFavorite={isFavorite}
				callback={() => {
					addFavorite({
					id: pokemon.id,
					name: pokemon.name,
					image: pokemon.sprites.other.home.front_default,
					types:pokemon.types
					});
				}}
				/>
			)}
			<Link to={`/pokemon/${pokemon.id}`} className={`card-pokemon ${pokemon.types[0].type.name}`}>
				<div className='card-img'>
					<img
						src={pokemon.sprites.other.home.front_default}
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
}

export  {CardPokemon}
import React, { useContext } from 'react'
import './PokemonList.css'
import { PokemonContext } from '../../context/PokemonContext'
import { CardPokemon } from '../CardPokemon/CardPokemon'
import { Loader } from '../Loader/Loader'

function PokemonList({searchedPokemons}) {

    const { loading}= useContext(PokemonContext)

    return (
        <>
            {
                loading ? (
                    <Loader/>
                ) : (
                    <div className="card-list-pokemon ">
                        {searchedPokemons.map(pokemon => (
                            <CardPokemon pokemon={pokemon} key={pokemon.id} />
                        ))}
                    </div>
                )
            }
        </>
    )
}

export {PokemonList}
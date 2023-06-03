import React, { useContext } from 'react'
import './PokemonList.css'
import { PokemonContext } from '../../context/PokemonContext'
import { CardPokemon } from '../CardPokemon/CardPokemon'
import { Loader } from '../Loader/Loader'

function PokemonList({searchedPokemons}) {

    const {globalPokemons, loading, filteredPokemons}= useContext(PokemonContext)

    return (
        <>
            {
                loading ? (
                    <Loader/>
                ) : (
                    <div className="card-list-pokemon ">
                        {
                            filteredPokemons.length ? (
                                <>
                                {filteredPokemons.map(pokemon => (
                                    <CardPokemon pokemon={pokemon} key={pokemon.id}  />
                                ))}
                                </>
                            ):(
                                <>
                                {searchedPokemons.map(pokemon => (
                                    <CardPokemon pokemon={pokemon} key={pokemon.id}  />
                                ))}
                                </>
                            )
                        }
                        
                    </div>
                )
            }
        </>
    )
}

export {PokemonList}
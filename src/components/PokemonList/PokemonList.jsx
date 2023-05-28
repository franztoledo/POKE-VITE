import React, { useContext } from 'react'
import './PokemonList.css'
import { PokemonContext } from '../../context/PokemonContext'
import { CardPokemon } from '../CardPokemon/CardPokemon'
import { Loader } from '../Loader/Loader'

function PokemonList() {

    const {allPokemons, loading, filteredPokemons}= useContext(PokemonContext)

    return (
        <>
            {
                loading ? (
                    <Loader/>
                ) : (
                    <div className="card-list-pokemon container">
                        {
                            filteredPokemons.length ? (
                                <>
                                {filteredPokemons.map(pokemon => (
                                    <CardPokemon pokemon={pokemon} key={pokemon.id}  />
                                ))}
                                </>
                            ):(
                                <>
                                {allPokemons.map(pokemon => (
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
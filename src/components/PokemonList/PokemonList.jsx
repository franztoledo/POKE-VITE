import React, { useContext } from 'react'
import './PokemonList.css'
function PokemonList({children}) {
    return (
    
        <div className="card-list-pokemon ">
            {children}
        </div>
                
    )
}

export {PokemonList}
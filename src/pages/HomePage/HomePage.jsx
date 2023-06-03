import React, { useContext, useState } from 'react'
import './HomePage.css'
import { FilterBar, PokemonList } from '../../components'
import { PokemonContext } from '../../context/PokemonContext'
import { Link } from 'react-router-dom'


function HomePage() {
	const {globalPokemons}= useContext(PokemonContext)
	const {active, setActive}=useContext(PokemonContext)
	const [searchValue, setSearchValue]=React.useState('')
	const [typeSelected, setTypeSelected] = useState({
        grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
    })
    const [filteredPokemons, setFilteredPokemons] = useState(globalPokemons)
    const handleCheckbox= e =>{
        setTypeSelected({
			...typeSelected,
			[e.target.name]: e.target.checked,
		});
        

        if (e.target.checked) {
			const filteredResults = globalPokemons.filter(pokemon =>
				pokemon.types
					.map(type => type.type.name)
					.includes(e.target.name)
			)
			setFilteredPokemons([...filteredPokemons, ...filteredResults]);
		} else {
			const filteredResults = filteredPokemons.filter(pokemon =>
					!pokemon.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setFilteredPokemons([...filteredResults]);
		}
    }
	let pokemonData=[]
	filteredPokemons.length ? (
		pokemonData=[...filteredPokemons]
	):(
		pokemonData=[...globalPokemons]
	)
	const searchedPokemons = pokemonData.filter(pokemon => pokemon.name.includes(searchValue))
  	return (
    <>
		<div className='nav-actions'>
			<div className='form-group'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					className='icon-search'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>
				<input
					type='search'
					id=''
					name='valueSearch'
					value={searchValue}
					onChange={(event)=>{
						setSearchValue(event.target.value);
					}}
					placeholder='Buscar nombre de pokemon'
				/>
			</div>
			<Link to={`/favorites`} className='btn-fav' >
				<svg width="18" height="18" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.9057 1.18156C18.9526 1.18532 19.1045 1.20226 19.2433 1.2192C22.0291 1.54287 24.3158 3.65613 24.873 6.4205C25.1225 7.66249 24.9987 9.25638 24.5522 10.6038C24.0795 12.0208 23.2859 13.259 21.9315 14.691C21.29 15.3685 20.7422 15.8766 18.9526 17.4573C18.5192 17.8393 18.0371 18.2665 17.8833 18.4076C15.9623 20.1389 14.6286 21.5916 13.4824 23.2006L13.2385 23.5449H12.9909L12.7433 23.543L12.4994 23.1817C11.4545 21.6349 10.2258 20.2461 8.40049 18.5506C8.04219 18.2157 7.63512 17.8487 6.47392 16.8137C4.68054 15.2104 3.76321 14.2864 3.02034 13.3324C1.81412 11.7799 1.20445 10.3158 1.02436 8.52812C0.988718 8.15929 0.992471 7.27672 1.03374 6.95682C1.23071 5.44197 1.86102 4.13976 2.90591 3.09159C3.9508 2.04343 5.25082 1.40926 6.75906 1.21355C7.12111 1.16839 7.909 1.16839 8.27856 1.21355C9.65361 1.38856 10.8655 1.94181 11.8803 2.85825C12.2386 3.18192 12.642 3.64296 12.884 4.00615C12.9402 4.09083 12.9909 4.16046 12.9965 4.16046C13.0021 4.16046 13.0528 4.09083 13.1091 4.00615C13.3511 3.64296 13.7544 3.18192 14.1127 2.85825C15.1088 1.95875 16.3075 1.40361 17.6357 1.22672C17.9096 1.18909 18.6899 1.16274 18.9057 1.18156Z" strokeWidth="2"/>
				</svg>
			</Link>
		</div>
		<div className='container-filter container'>
			<div className='icon-filter' onClick={()=>setActive(!active)} >
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					className='icon'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
					/>
				</svg>
				<span>Filtrar</span>
			</div>
	  	</div>
		<PokemonList 
			
			searchedPokemons={searchedPokemons}
			filteredPokemons={filteredPokemons}
		/>
		<FilterBar
			handleCheckbox={handleCheckbox}
		/>
	</>
  )
}

export  {HomePage}
import React from 'react'
import { Link, Outlet  } from 'react-router-dom'
import './Nav.css'
import { PokeballIconSmall } from '../../assets/icon'

function Nav() {

	return (
		<div>
			<header className='container'>
				<Link to='/' className='logo'>
					<PokeballIconSmall/>
					<span>
						Pokedex
					</span>
				</Link>
				
			</header>
			<Outlet/>
		</div>
	)
}

export  {Nav}
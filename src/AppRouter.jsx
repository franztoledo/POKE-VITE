import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'
import { HomePage, PokemonPage, Searchpage } from './pages'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Nav/>}>
            <Route index element={<HomePage/>}/>
            <Route path='favorites' element={<Searchpage/>}/> 
        </Route>
        <Route path='pokemon/:id' element={<PokemonPage/>}/>
    </Routes>
  )
}

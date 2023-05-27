import React from 'react'
import { Outlet } from 'react-router'

function Nav() {
  return (
    <div>
        <h1>
            Navegatcion
        </h1>
        <Outlet/>
    </div>
  )
}

export  {Nav}
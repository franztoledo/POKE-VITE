import React from 'react'
import { ChaoticOrbit } from '@uiball/loaders'
import './Loader.css'


function Loader() {
  return (
    <div className='container-loader'>
      <ChaoticOrbit 
      size={60}
      speed={1.5} 
      color="red" 
      />
    </div>
  )
}

export {Loader}
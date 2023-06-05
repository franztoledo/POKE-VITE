import React from 'react'
import './BaseStats.css'
function BaseStats({pokemon, bgColor}) {
  const maxStat = 255;
  const baseStatsNames = {
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "satk",
    "special-defense": "sdef",
    speed: "spd",
  };
  return (
    <div className='baseStats'>
      {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {

        return (
          <div key={name} className='item'>
            <span >
              {name}
            </span>
            <div className='rigth'>
              <p>0{base_stat}</p>
              <div className='line'>
                <div
                  className={`background ${bgColor}`}
                  
                />
                <div
                  className={`secondLine ${bgColor}`}
                  style={{
                    opacity: "1",
                    width: `${(base_stat / maxStat) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export  {BaseStats}
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Load from '../components/Load';
import './Detail.css'

const Detail = () => {

  const {id} = useParams();
  const [dataPoke, setDataPoke] = useState('');

  const type1 = (type) => type.types[0].type.name;
  const type2 = (type) => type.types[1].type.name;

  const getPokes = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    setDataPoke(data)
  }

  useEffect(() => {
    getPokes()
  },[]);

  if (!dataPoke)
    return <Load />

  return (
    <div className='main-container'>
        <header>
            <div className="logo-container">
                <NavLink to='/'>
                    <img
                        className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
                        alt="logo pokemon" 
                    />
                </NavLink>
                <h1>Primera Generación</h1>
            </div>

            <h2><span># {dataPoke.id}</span> {id.charAt(0).toUpperCase() + id.slice(1)}</h2>
        </header>

        <div className='detail-container'>
            <div className="detail-top">
                <div className='name-type'>
                    <h2>{id.charAt(0).toUpperCase() + id.slice(1)}</h2>
                    <div className='type-container'>
                        <h3 className={type1(dataPoke)}>{type1(dataPoke)}</h3>
                        {dataPoke.types[1] && (
                            <h3 className={type2(dataPoke)}>{type2(dataPoke)}</h3>
                        )}
                    </div>
                </div>

                <div className="stats-bottom">
                    <div className='stat-bottom'>
                        <p className='stat-name'>PS</p>
                        <p className='stat'>{dataPoke.stats[0].base_stat}</p>
                    </div>
                    <div className='stat-bottom'>
                        <p className='stat-name'>Ataque</p>
                        <p className='stat'>{dataPoke.stats[1].base_stat}</p>
                    </div>
                    <div className='stat-bottom'>
                        <p className='stat-name'>Defensa</p>
                        <p className='stat'>{dataPoke.stats[2].base_stat}</p>
                    </div>
                    <div className='stat-bottom'>
                        <p className='stat-name'>Ataque Especial</p>
                        <p className='stat'>{dataPoke.stats[3].base_stat}</p>
                    </div>
                    <div className='stat-bottom'>
                        <p className='stat-name'>Defensa Especial</p>
                        <p className='stat'>{dataPoke.stats[4].base_stat}</p>
                    </div>
                    <div className='stat-bottom'>
                        <p className='stat-name'>Velocidad</p>
                        <p className='stat'>{dataPoke.stats[5].base_stat}</p>
                    </div>
                </div>
            </div>

            <div className='image-right'>
                <img
                    src={dataPoke.sprites.other["official-artwork"].front_default}
                    alt="pokemon"
                />
            </div>
        </div>
    </div>
  )
}

export default Detail

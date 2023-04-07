import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import Pokedex from '../../pages/Pokedex'
import Detail from '../../pages/Detail'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='pokedex' element={<Pokedex />} />
        <Route path='/:id' element={<Detail />} />
      </Routes>
    </>
  )
}

export default AppRouter

import React from 'react'
import { CrearEventoView } from '../views/CrearEventoView'
import CrearEventos from '../components/CrearEventos'
import Sidebar from '../components/Sidebar'

const CrearEvento = () => {
  return (
    <>
      <CrearEventoView >
        <Sidebar/>
        <CrearEventos/>        
      </CrearEventoView>      
    </>
  )
}

export default CrearEvento

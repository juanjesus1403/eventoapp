import React from 'react'
import { SidebarContainer,SidebarLogo,SidebarMenu,TableroControl,RegistroEventos,Estadisticas,LogOut } from './SidebarElements'
import logo from '../../images/logo.png'

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarLogo src={logo}/>
        <SidebarMenu>
          <TableroControl>Tablero de Control</TableroControl>
          <RegistroEventos>Registro de Eventos</RegistroEventos>
          <Estadisticas>Estadisticas</Estadisticas>
          <LogOut>Cerrar Sesión</LogOut> 
        </SidebarMenu>
      </SidebarContainer>      
    </>
  )
}

export default Sidebar


import React from 'react'
import { DashboardView } from './DashboardView'
import Sidebar from '../components/Sidebar'
import Eventos from '../components/Eventos'

const Dashboard = () => {
  return (
    <>
      <DashboardView>
        <Sidebar/>
        <Eventos/>        
      </DashboardView>      
    </>
  )
}

export default Dashboard

//import React from 'react'
import Sidebar from '../components/Sidebar/sideBar'
import { Outlet } from 'react-router-dom'

function Layouts() {
  return (
    <>
    <Sidebar/>
    <Outlet/>
    </>
  )
}

export default Layouts
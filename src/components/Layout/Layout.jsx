import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import MainNavBar from '../MainNavBar/MainNavBar'
import SideBar from '../SideBar/SideBar'


export default function Layout() {
    return <>
        <SideBar />
        <MainNavBar />
        <NavBar />
        <Outlet />
        <Footer />
    </>
}

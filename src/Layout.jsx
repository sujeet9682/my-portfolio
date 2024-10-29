import React from 'react'
import Sidebar from './components/Navbar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <div
        className="flex antialiased h-screen overflow-hidden bg-gray-950">
            <Sidebar />
            <div className="flex-1  h-screen overflow-auto mx-7">
                <Outlet /> {/* This renders the current route's component */}
            </div>
        </div>
    )
}

export default Layout

import { Layout as AntLayout } from 'antd'
import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <AntLayout>
            <Header />
            <Outlet />
        </AntLayout>
    )
}

export default Layout
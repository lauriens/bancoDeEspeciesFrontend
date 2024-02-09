import { Layout } from 'antd'
import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <Layout>
            <Header />
            <Outlet />
        </Layout>
    )
}

export default Home
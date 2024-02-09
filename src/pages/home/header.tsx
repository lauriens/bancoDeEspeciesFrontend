import React from 'react'
import { Header as AntHeader } from 'antd/es/layout/layout'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'

const routes = [
    {
        key: 'Home',
        label: (
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Home
        </NavLink>
        )
    },
    {
        key: 'Inserção',
        label: (
        <label>
            Inserção
        </label>
        ),
        children: [
            {
                key: 'Taxonomia',
                label: 'Taxonomia',
                type: 'group',
                children: [
                    {
                        key: 'Domínio',
                        label: <NavLink
                                    to="/dominio"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Domínio
                                </NavLink>
                    },
                    {
                        key: 'Reino',
                        label: <NavLink
                                    to="/reino"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Reino
                                </NavLink>
                    }
                ]
            },
            {

            }
        ]
    }
]

function Header() {
    return (
        <AntHeader style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['Home']}
                items={routes}
                style={{ flex: 1, minWidth: 0 }}
            />
        </AntHeader>
    )
}

export default Header
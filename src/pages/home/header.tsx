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
                    },
                    {
                        key: 'Filo',
                        label: <NavLink
                                    to="/filo"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Filo
                                </NavLink>
                    },
                    {
                        key: 'Classe',
                        label: <NavLink
                                    to="/classe"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Classe
                                </NavLink>
                    },
                    {
                        key: 'Ordem',
                        label: <NavLink
                                    to="/ordem"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Ordem
                                </NavLink>
                    },
                    {
                        key: 'Familia',
                        label: <NavLink
                                    to="/familia"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Família
                                </NavLink>
                    },
                    {
                        key: 'Genero',
                        label: <NavLink
                                    to="/genero"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Gênero
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
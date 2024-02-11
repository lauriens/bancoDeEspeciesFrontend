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
        key: 'Taxonomia',
        label: 'Taxonomia',
        children: [
            {
                key: 'Inserção',
                label: 'Inserção',
                type: 'group',
                children: [
                    {
                        key: 'TaxonomyTree',
                        label: <NavLink
                                    to="/taxonomia"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Taxonomia Completa
                                </NavLink>
                    },
                    {
                        type: 'divider'
                    },
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
                    },
                    {
                        key: 'Especie',
                        label: <NavLink
                                    to="/especie"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Espécie
                                </NavLink>
                    }
                ]
            },
            {

            }
        ]
    },
    {
        key: 'Referencia',
        label: 'Referência',
        children: [
            {
                key: 'ReferenceType',
                label: (
                            <NavLink
                                to="/referenceType"
                                className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Tipos de Referência
                            </NavLink>
                        )
            },
            {
                key: 'Reference',
                label: (
                            <NavLink
                                to="/reference"
                                className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Referência
                            </NavLink>
                        )
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
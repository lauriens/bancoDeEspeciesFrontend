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
                    },
                    {
                        key: 'EspecieCultura',
                        label: <NavLink
                                    to="/especieCultura"
                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Espécie da Cultura
                                </NavLink>
                    }
                ]
            }
        ]
    },
    {
        key: 'Referencia',
        label: 'Referência',
        children: [
            {
                key: 'FullReference',
                label:(
                    <NavLink
                        to="/estudo"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Estudo
                    </NavLink>
                )
            },
            {
                type: 'divider'
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
            },
            {
                key: 'StudyMethodCollect',
                label: (
                            <NavLink
                                to="/metodoColetaEstudo"
                                className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Métodos de Coleta do Estudo
                            </NavLink>
                        )
            },
            {
                key: 'MaterialDestination',
                label: (
                            <NavLink
                                to="/destinoMaterial"
                                className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Destinos de Material
                            </NavLink>
                        )
            },
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
            }
        ]
    },
    {
        key: 'Ocorrencia',
        label: 'Ocorrência',
        children: [
            {
                key: 'Occurrence',
                label:(
                    <NavLink
                        to="/ocorrencia"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Ocorrência
                    </NavLink>
                )
            },
            {
                key: 'GraudeAmeaca',
                label:(
                    <NavLink
                        to="/ameaca"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Graus de Ameaça
                    </NavLink>
                )
            },
            {
                key: 'MetodoColeta',
                label:(
                    <NavLink
                        to="/metodoColetaOcorrencia"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Métodos de Coleta de Ocorrência
                    </NavLink>
                )
            },
        ]
    },
    {
        key: 'Paisagem',
        label: 'Paisagem',
        children: [
            {
                key: 'FullLandscape',
                label:(
                    <NavLink
                        to="/paisagemCompleta"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Paisagem Completa
                    </NavLink>
                )
            },
            {
                key: 'Landscape',
                label:(
                    <NavLink
                        to="/paisagem"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Paisagem
                    </NavLink>
                )
            },
            {
                key: 'Pais',
                label:(
                    <NavLink
                        to="/pais"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        País
                    </NavLink>
                )
            },
            {
                key: 'Uf',
                label:(
                    <NavLink
                        to="/uf"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        UF
                    </NavLink>
                )
            },
            {
                key: 'Municipio',
                label:(
                    <NavLink
                        to="/municipio"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Município
                    </NavLink>
                )
            },
            {
                key: 'Localidade',
                label:(
                    <NavLink
                        to="/localidade"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Localidades
                    </NavLink>
                )
            },
            {
                key: 'Antroma',
                label:(
                    <NavLink
                        to="/antroma"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Antroma
                    </NavLink>
                )
            },{
                key: 'Bioma',
                label:(
                    <NavLink
                        to="/bioma"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Bioma
                    </NavLink>
                )
            },
            {
                key: 'Agroecosystem',
                label:(
                    <NavLink
                        to="/agroecossistema"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Tipos de Agroecossistema
                    </NavLink>
                )
            },
            {
                key: 'SampleAreaType',
                label:(
                    <NavLink
                        to="/TipoAreaAmostra"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Tipos de Área Amostrada
                    </NavLink>
                )
            },
            {
                key: 'AreaType',
                label:(
                    <NavLink
                        to="/tipoArea"
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Tipos de Área
                    </NavLink>
                )
            }
        ]
    },
    {
        key: 'Cultura',
        label: 'Cultura',
        children: [
            {
                key: 'FullCulture',
                label: (
                    <NavLink
                        to='/culturaCompleta'
                        className={({ isActive, isPending }) => 
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        Cultura Completa
                    </NavLink>
                )
            },
            {
                key: 'Culture',
                label: (
                    <NavLink
                        to='/cultura'
                        className={({ isActive, isPending }) => 
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        Cultura
                    </NavLink>
                )
            },
            {
                key: 'OccurrenceCulture',
                label: (
                    <NavLink
                        to='/culturaOcorrencia'
                        className={({ isActive, isPending }) => 
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        Cultura - Ocorrência
                    </NavLink>
                )
            }
        ]
    },
    {
        key: 'User',
        label: (
            <NavLink
                to='/user'
                className={({ isActive, isPending }) => 
                    isPending ? 'pending' : isActive ? 'active' : ''
                }
            >
                Usuários
            </NavLink>
        )
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
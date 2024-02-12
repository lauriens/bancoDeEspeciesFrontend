import React from 'react'
import Landscape from '../../../dataModels/landscape/landscape'
import { Table } from 'antd'

type TableProps = {
    data: Landscape[]
}

function LandscapeTable({ data }: TableProps) {
    const columns = [
        {
            title: 'Latitude',
            dataIndex: 'latitude',
            key: 'latitude'
        },
        {
            title: 'Longitude',
            dataIndex: 'longitude',
            key: 'longitude'
        },
        {
            title: 'Raio',
            dataIndex: 'radius',
            key: 'radius'
        },
        {
            title: 'Descrição',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Agroecossistema',
            key: 'agroecosystem',
            render: (_, record: Landscape) => <p>{record.agroecosystem?.name || ''}</p>
        },
        {
            title: 'Antroma',
            key: 'anthrome',
            render: (_, record: Landscape) => <p>{record.anthrome?.name || ''}</p>
        },
        {
            title: 'Tipo de Área Amostrada',
            key: 'type',
            render: (_, record: Landscape) => <p>{record.sampleAreaType?.name || ''}</p>
        },
        {
            title: 'É Área Protegida?',
            key: 'isProtectedArea',
            dataIndex: 'isProtectedArea',
            render: (isProtected: boolean) => <p>{isProtected ? 'SIM' : 'NÃO'}</p>
        }
    ]

    return (
        <Table dataSource={data?.map(d => { return { ...d, key: d.id }})} columns={columns} />
    )
}

export default LandscapeTable
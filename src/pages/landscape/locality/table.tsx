import React from 'react'
import Locality from '../../../dataModels/landscape/locality'
import { Table } from 'antd'

type TableProps = {
    data: Locality[]
}

function LocalityTable({ data }: TableProps) {
    const columns = [
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name'
        },
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
            title: 'Tipo de Área Amostrada',
            key: 'type',
            render: (_, record: Locality) => <p>{record.sampleAreaType?.name || ''}</p>
        }
    ]

    return (
        <Table dataSource={data?.map(d => { return { ...d, key: d.id }})} columns={columns} />
    )
}

export default LocalityTable
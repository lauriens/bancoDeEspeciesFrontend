import React from 'react'
import MaterialDestination from '../../../dataModels/reference/materialDestination'
import { Table } from 'antd'

type TableProps = {
    data: MaterialDestination[]
}

function MaterialDestinationTable({ data }: TableProps) {
    const columns = [
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Descrição',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'ID no GBIF',
            dataIndex: 'gbifId',
            key: 'gbifId'
        }
    ]

    return (
        <Table dataSource={data?.map(d => { return { ...d, key: d.id }})} columns={columns} />
    )
}

export default MaterialDestinationTable
import React from 'react'
import CollectMethod, { MethodType } from '../../../dataModels/occurrence/collectMethod'
import { Table } from 'antd'

type TableProps = {
    data?: CollectMethod[]
}

function CollectMethodTable({ data }: TableProps) {
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
            title: 'Tipo',
            dataIndex: 'type',
            key: 'type',
            render: (value: number) => <p>{MethodType[value]}</p>
        }
    ]

    return (
        <Table dataSource={data?.map(d => { return { ...d, key: d.id }})} columns={columns} />
    )
}

export default CollectMethodTable
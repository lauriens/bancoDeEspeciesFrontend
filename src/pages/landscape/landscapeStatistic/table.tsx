import React from 'react'
import LandscapeStatistic from '../../../dataModels/landscape/landscapeStatistic'
import { Table } from 'antd'

type TableProps = {
    data?: LandscapeStatistic[]
}

function LandscapeStatisticTable({ data }: TableProps) {
    const columns = [
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Valor',
            dataIndex: 'value',
            key: 'value'
        }
    ]

    return (
        <Table dataSource={data?.map(d => { return { ...d, key: d.id }})} columns={columns} />
    )
}

export default LandscapeStatisticTable
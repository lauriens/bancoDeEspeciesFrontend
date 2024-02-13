import React from 'react'
import ThreatDegree, { ThreatDegreeSources } from '../../../dataModels/occurrence/threatDegree'
import { Table } from 'antd'
import dayjs from 'dayjs'

type TableProps = {
    data?: ThreatDegree[]
}

function ThreatDegreeTable({ data }: TableProps) {
    const columns = [
        {
            title: 'Espécie',
            key: 'specie',
            render: (_: string, record: ThreatDegree) => <p>{`${record?.specie?.genus?.name || ''} ${record?.specie?.name || ''}`}</p>
        },
        {
            title: 'Classificação',
            dataIndex: 'classification',
            key: 'classification'
        },
        {
            title: 'Fonte',
            dataIndex: 'source',
            key: 'source'
        },
        {
            title: 'Data da Resolução',
            dataIndex: 'resolutionDate',
            key: 'resolutionDate',
            render: (value: string) => <p>{value ? dayjs(value).format('DD/MM/YYYY') : ''}</p>
        },
        {
            title: 'País',
            key: 'country',
            render: (_: string, record: ThreatDegree) => <p>{record.country?.name || ''}</p>
        },
        {
            title: 'UF',
            key: 'uf',
            render: (_: string, record: ThreatDegree) => <p>{record.uf?.name || ''}</p>
        }
    ]

    return (
        <Table dataSource={data?.map(d => { return { ...d, key: d.id }})} columns={columns} />
    )
}

export default ThreatDegreeTable
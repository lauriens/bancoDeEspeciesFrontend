import React from 'react'
import Culture from '../../../dataModels/culture/culture'
import { Table } from 'antd'

type TableProps = {
    data?: Culture[]
    cultureId?: number
    setCultureId?: React.Dispatch<React.SetStateAction<number | undefined>>
}

function CultureTable({ data, cultureId, setCultureId }: TableProps) {
    const columns = [
        {
            title: 'Nome Comum',
            dataIndex: 'commonName',
            key: 'commonName'
        },
        {
            title: 'Variedade',
            dataIndex: 'variety',
            key: 'variety'
        },
        {
            title: 'Fenologia',
            dataIndex: 'phenology',
            key: 'phenology'
        },
        {
            title: 'Área Plantada',
            dataIndex: 'plantedArea',
            key: 'plantedArea'
        },
        {
            title: 'Tempo desde o Plantio',
            key: 'timeSincePlanting',
            render: (_, record: Culture) => <p>{`${record.timeSincePlanting || ''} ${record.timeSincePlantingUnit || ''}`}</p>
        },
        {
            title: 'Tipo da Espécie',
            dataIndex: 'speciesType',
            key: 'speciesType'
        },
        {
            title: 'Espécie',
            dataIndex: 'specie',
            key: 'specie',
            render: (_, record: Culture) => <p>{`${record.specie?.genus?.name || ''} ${record.specie?.name || ''}`}</p>
        }
    ]

    return (
        <Table 
            dataSource={data?.map(d => { return { ...d, key: d.id }})} 
            columns={columns} 
            rowClassName={(row: Culture) => row.id === cultureId ? 'row-selected' : ''} 
            onRow={(record: Culture) => {
                return {
                  onClick: () => {
                    if (setCultureId) setCultureId(record.id)
                  },
                };
              }}
        />
    )
}

export default CultureTable
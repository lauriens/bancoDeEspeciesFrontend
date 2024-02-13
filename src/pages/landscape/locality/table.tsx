import React from 'react'
import Locality from '../../../dataModels/landscape/locality'
import { Table } from 'antd'
import '../../../styles/styles.css'

type TableProps = {
    data: Locality[]
    localityId?: number
    setLocalityId?: React.Dispatch<React.SetStateAction<number | undefined>>
}

function LocalityTable({ data, localityId, setLocalityId }: TableProps) {
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
            render: (_: string, record: Locality) => <p>{record.sampleAreaType?.name || ''}</p>
        }
    ]

    return (
        <Table 
            dataSource={data?.map(d => { return { ...d, key: d.id }})} 
            columns={columns} 
            rowClassName={row => row.id === localityId ? 'row-selected' : ''} 
            onRow={record => {
                return {
                  onClick: () => {
                    if (setLocalityId) setLocalityId(record.id)
                  },
                };
              }}
        />
    )
}

export default LocalityTable
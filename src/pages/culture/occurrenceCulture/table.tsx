import React from 'react'
import OccurrenceCulture from '../../../dataModels/culture/occurrenceCulture'
import { Table } from 'antd'
import OccurrenceTable from '../../occurrence/occurrence/table'
import CultureTable from '../culture/table'

type TableProps = {
    data?: OccurrenceCulture[]
}

function OccurrenceCultureTable({ data }: TableProps) {
    const columns = [
        {
            title: 'Estágio',
            dataIndex: 'stage',
            key: 'stage'
        },
        {
            title: 'Fenologia',
            dataIndex: 'phenology',
            key: 'phenology'
        },
        {
            title: 'Porcentagem',
            dataIndex: 'percentage',
            key: 'percentage'
        },
        {
            title: 'Área',
            dataIndex: 'area',
            key: 'area'
        },
        {
            title: 'Produtividade',
            dataIndex: 'productivity',
            key: 'productivity'
        },
        {
            title: 'Maioria?',
            key: 'isMajority',
            dataIndex: 'isMajority',
            render: (majority: boolean) => <p>{majority ? 'SIM' : 'NÃO'}</p>
        }
    ]

    return (
        <Table 
            dataSource={data?.map(d => { return { ...d, key: `${d.occurrenceId}-${d.cultureId}` }})} 
            columns={columns} 
            expandable={{
                expandedRowRender: (record: OccurrenceCulture) => <><OccurrenceTable data={[record.occurrence]} /> <CultureTable data={[record.culture]}/></>,
                rowExpandable: (record: OccurrenceCulture) => !!record.occurrence || !!record.culture,
              }}
        />
    )
}

export default OccurrenceCultureTable
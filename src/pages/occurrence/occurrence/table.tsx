import React from 'react'
import Occurrence from '../../../dataModels/occurrence/occurrence'
import { Table } from 'antd'
import { formatDate, formatTime } from '../../../infra/formatData'

type TableProps = {
    data: Occurrence[]
    occurrenceId?: number
    setOccurrenceId?: React.Dispatch<React.SetStateAction<number>>
}

function OccurrenceTable( { data, occurrenceId, setOccurrenceId }: TableProps) {
    const columns = [
        {
            title: 'Espécie',
            key: 'specie',
            render: (_: string, record: Occurrence) => <p>{`${record?.specie?.genus?.name || ''} ${record?.specie?.name || ''}`}</p>
        },
        {
            title: 'Período de Coleta',
            key: 'dateRange',
            render: (_: string, record: Occurrence) => <p>{record.startDate ? `${formatDate(record.startDate)} - ${formatDate(record.endDate)}` : ''}</p>
        },
        {
            title: 'Horário da Coleta',
            dataIndex: 'occurrenceTime',
            key: 'occurrenceTime',
            render: (time: string) => <p>{time ? formatTime(time) : ''}</p>
        },
        {
            title: 'Tipo de Ocorrência',
            dataIndex: 'occurrenceType',
            key: 'occurrenceType'
        },
        {
            title: 'Observação do Revisor',
            key: 'reviewerObservation',
            dataIndex: 'reviewerObservation'
        },
        {
            title: 'Grau de Ameaça',
            key: 'threatDegree',
            render: (_: string, record: Occurrence) => <p>{record.threatDegree?.classification || ''}</p>
        },
        {
            title: 'Método de Coleta',
            key: 'occurrenceMethod',
            render: (_: string, record: Occurrence) => <p>{record.occurrenceColetaMethod?.name || ''}</p>
        }
    ]

    return (
        <Table 
            dataSource={data?.map(d => { return { ...d, key: d.id }})} 
            columns={columns} 
            expandable={{
                expandedRowRender: (record: Occurrence) => <p style={{ margin: 0 }}>{`${record.locality?.name || ''}: ${record.locality?.latitude || ''}, ${record.locality?.longitude || ''}`}</p>,
                rowExpandable: (record: Occurrence) => !!record.locality?.name,
            }}
            rowClassName={(row: Occurrence) => row.id === occurrenceId ? 'row-selected' : ''} 
            onRow={(record: Occurrence) => {
                return {
                onClick: () => {
                    if (setOccurrenceId) setOccurrenceId(record.id)
                },
                };
            }}
        />
    )
}

export default OccurrenceTable
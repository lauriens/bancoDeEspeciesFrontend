import React from 'react'
import StudyCollectMethod from '../../../dataModels/reference/studyCollectMethod'
import dayjs from 'dayjs'
import { Table } from 'antd'

type TableProps = {
    data?: StudyCollectMethod[]
}

function StudyCollectMethodTable({ data }: TableProps) {
    const columns = [
        {
            title: 'Desenho Amostral',
            dataIndex: 'sampleDrawing',
            key: 'sampleDrawing',
        },
        {
            title: 'Esforço Amostral',
            key: 'sampleEffort',
            render: (_, record: StudyCollectMethod) => <p>{(record.samplingEffort || '') + ' ' + (record.samplingEffortUnit || '')}</p>
        },
        {
            title: 'Início da Coleta',
            dataIndex: 'collectStartDate',
            key: 'collectStartDate',
            render: (date: string) => <p>{date ? dayjs(date).format('DD/MM/YYYY').toString() : ''}</p>
        },
        {
            title: 'Fim da Coleta',
            dataIndex: 'collectEndDate',
            key: 'collectEndDate',
            render: (date: string) => <p>{date ? dayjs(date).format('DD/MM/YYYY').toString() : ''}</p>
        },
        {
            title: 'Destino do Material',
            key: 'materialDestination',
            render: (_, record: StudyCollectMethod) => <p>{record.materialDestination?.name}</p>
        }
    ]

    return (
        <Table 
            dataSource={data?.map(d => { return {...d, key: d.id }})} 
            columns={columns} 
            expandable={{
                expandedRowRender: (record: StudyCollectMethod) => <p style={{ margin: 0 }}>{`${record.reference?.year || ''}, ${record.reference?.authorName || ''}: ${record.reference?.title || ''}`}</p>,
                rowExpandable: (record: StudyCollectMethod) => !!record.reference?.authorName,
              }}
        />
    )
}

export default StudyCollectMethodTable
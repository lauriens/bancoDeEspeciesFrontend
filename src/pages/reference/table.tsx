import React from 'react'
import Reference from '../../dataModels/reference/reference'
import { Table } from 'antd'
import StudyCollectMethodTable from './studyCollectMethod/table'

type ReferenceTableProps = {
    data: Reference[]
}

function ReferenceTable({ data }: ReferenceTableProps) {
    const columns = [
        {
            title: 'Título',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Autores',
            dataIndex: 'authorName',
            key: 'authors'
        },
        {
            title: 'Ano',
            dataIndex: 'year',
            key: 'year'
        },
        {
            title: 'Tipo',
            key: 'referenceType',
            render: (_, record: Reference) => <p>{ record.referenceType?.typeName || '' }</p>
        }
    ]

    return (
        <Table 
            dataSource={data?.map(d => { return { ...d, key: d.id }})} 
            columns={columns} 
            expandable={{
                expandedRowRender: (record: Reference) => <StudyCollectMethodTable data={record.studyCollectMethods} />,
                rowExpandable: (record: Reference) => !!record.studyCollectMethods?.some(s => s.id),
              }}
        />
    )
}

export default ReferenceTable
import React, { useEffect, useState } from 'react'
import ReferenceTypeForm from './form'
import { Collapse, List, message } from 'antd'
import ReferenceType from '../../../dataModels/reference/referenceType'
import { getReferenceTypes } from '../../../api/reference/referenceType'
import './referenceType.css'

function ReferenceTypePage() {
    const [referenceTypes, setReferenceTypes] = useState<ReferenceType[]>()
    const [shouldReload, setShouldReload] = useState(true)

    useEffect(() => {
        if (shouldReload) {
            getReferenceTypes().then(d => {
                if (d.success) setReferenceTypes(d.data)
                else message.error('Falha ao buscar tipos de referência')
                setShouldReload(false)
            })
        }
    }, [shouldReload])

    return (
        <div className='reference-type'>
            <Collapse
                defaultActiveKey={['1']} items={[{ key: '1', label: 'Criar tipo de referência', children: <ReferenceTypeForm success={setShouldReload} /> }]}
                />
            <List
                header={<h1>Tipos de Referência</h1>}
                bordered
                dataSource={referenceTypes}
                renderItem={(item) => <List.Item>{item.typeName}</List.Item> }
            />
        </div>
    )
}

export default ReferenceTypePage
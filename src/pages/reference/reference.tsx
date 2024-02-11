import { Collapse, message } from 'antd'
import React, { useEffect, useState } from 'react'
import ReferenceForm from './form'
import Reference from '../../dataModels/reference/reference'
import { getReferences } from '../../api/reference/reference'
import ReferenceTable from './table'

function ReferencePage() {
    const [references, setReferences] = useState<Reference[]>()
    const [shouldReload, setShouldReload] = useState(true)

    useEffect(() => {
        getReferences().then(d => {
            if (d.success) setReferences(d.data)
            else message.error('Falha em buscar Referências')
        })
    }, [shouldReload])

    return (
        <div className='reference'>
            <Collapse
                defaultActiveKey={['1']} items={[{ key: '1', label: 'Criar tipo de referência', children: <ReferenceForm success={setShouldReload} /> }]}
                />
            <ReferenceTable data={references} />
        </div>
    )
}

export default ReferencePage
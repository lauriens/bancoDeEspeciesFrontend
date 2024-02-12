import React, { useEffect, useState } from 'react'
import CollectMethod from '../../../dataModels/occurrence/collectMethod'
import { Collapse, message } from 'antd'
import CollectMethodForm from './form'
import { getCollectMethods } from '../../../api/occurrence/collectMethod'
import CollectMethodTable from './table'

function CollectMethodPage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [collectMethods, setCollectMethods] = useState<CollectMethod[]>()

    useEffect(() => {
        if (shouldReload) {
            getCollectMethods().then(d => {
                if (d.success) setCollectMethods(d.data)
                else message.error('Falha em buscar métodos de coleta')
                setShouldReload(false)
            })
        }
    })

    return (
        <div className='collect-method'>
            <Collapse 
                defaultActiveKey={['1']} 
                items={[{ key: '1', label: 'Criar método de coleta', children: <CollectMethodForm success={setShouldReload} /> }]}
            />
            <CollectMethodTable data={collectMethods} />
        </div>
    )
}

export default CollectMethodPage
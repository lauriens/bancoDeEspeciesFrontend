import React, { useEffect, useState } from 'react'
import ThreatDegree from '../../../dataModels/occurrence/threatDegree'
import { Collapse, message } from 'antd'
import ThreatDegreeForm from './form'
import ThreatDegreeTable from './table'
import { getThreatDegrees } from '../../../api/occurrence/threatDegree'

function ThreatDegreePage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [threatDegrees, setThreatDegrees] = useState<ThreatDegree[]>()

    useEffect(() => {
        if (shouldReload) {
            getThreatDegrees().then(d => {
                if (d.success) setThreatDegrees(d.data)
                else message.error('Falha ao buscar graus de ameaça')
                setShouldReload(false)
            })
        }
    })

    return (
        <div className='threat-degree'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[{ key: '1', label: 'Criar grau de ameaça', children: <ThreatDegreeForm success={setShouldReload} /> }]}
            />
            <ThreatDegreeTable data={threatDegrees} />
        </div>
    )
}

export default ThreatDegreePage
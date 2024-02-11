import React, { useState } from 'react'
import ThreatDegree from '../../../dataModels/occurrence/threatDegree'
import { Collapse } from 'antd'
import ThreatDegreeForm from './form'

function ThreatDegreePage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [threatDegrees, setThreatDegrees] = useState<ThreatDegree[]>()

    return (
        <Collapse
            defaultActiveKey={['1']} 
            items={[{ key: '1', label: 'Criar grau de ameaça', children: <ThreatDegreeForm success={setShouldReload} /> }]}
        />
    )
}

export default ThreatDegreePage
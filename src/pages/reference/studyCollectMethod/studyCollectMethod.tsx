import React, { useState } from 'react'
import StudyCollectMethodForm from './form'
import { Collapse } from 'antd'

function StudyCollectMethodPage() {
    const [shouldReload, setShouldReload] = useState(true)

    return (
        <div className='study-collect-method'>
            <Collapse
                defaultActiveKey={['1']} items={[{ key: '1', label: 'Criar método de coleta', children: <StudyCollectMethodForm success={setShouldReload} /> }]}
                />
        </div>
    )
}

export default StudyCollectMethodPage
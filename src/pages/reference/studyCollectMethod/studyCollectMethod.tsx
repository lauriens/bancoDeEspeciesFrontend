import React, { useEffect, useState } from 'react'
import StudyCollectMethodForm from './form'
import { Collapse, message } from 'antd'
import StudyCollectMethodTable from './table'
import StudyCollectMethod from '../../../dataModels/reference/studyCollectMethod'
import { getStudyCollectMethods } from '../../../api/reference/studyCollectMethod'

function StudyCollectMethodPage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [studyCollectMethods, setStudyCollectMethods] = useState<StudyCollectMethod[]>()

    useEffect(() => {
        if (shouldReload) {
            getStudyCollectMethods().then(d => {
                if (d.success) setStudyCollectMethods(d.data)
                else message.error('Falha ao buscar métodos de coleta')
                setShouldReload(false)
            })
        }
    }, [shouldReload])

    return (
        <div className='study-collect-method'>
            <Collapse
                defaultActiveKey={['1']} items={[{ key: '1', label: 'Criar método de coleta', children: <StudyCollectMethodForm success={setShouldReload} /> }]}
                />
            <StudyCollectMethodTable data={studyCollectMethods} />
        </div>
    )
}

export default StudyCollectMethodPage
import React, { useEffect, useState } from 'react'
import Culture from '../../../dataModels/culture/culture'
import CultureForm from './form'
import { Collapse, message } from 'antd'
import { StepProps } from '../fullCulture/steps'
import CultureTable from './table'
import { getCultures, getLandscapeCultures } from '../../../api/culture/culture'

function CulturePage({ visible = true, landscapeId, cultureId, setCultureId }: StepProps) {
    const [shouldReload, setShouldReload] = useState(true)
    const [cultures, setCultures] = useState<Culture[]>()

    useEffect(() => {
        if (shouldReload || (!shouldReload && landscapeId)) {
            if (landscapeId) {
                getLandscapeCultures(landscapeId).then(d => {
                    if (d.success) setCultures(d.data)
                    else message.error('Falha ao buscar culturas')
                })
            }
            else {
                getCultures().then(d => {
                    if (d.success) setCultures(d.data)
                    else message.error('Falha ao buscar culturas')
                })
            }
            setShouldReload(false)
        }
    }, [shouldReload, landscapeId])

    if (!visible) return null

    return (
        <div className='culture'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar Cultura', children: <CultureForm success={setShouldReload} landscapeId={landscapeId} setCultureId={setCultureId} /> }
                ]}
            />
            <CultureTable data={cultures} cultureId={cultureId} setCultureId={setCultureId} />
        </div>
    )
}

export default CulturePage
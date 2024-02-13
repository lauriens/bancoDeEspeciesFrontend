import React, { useEffect, useState } from 'react'
import Landscape from '../../../dataModels/landscape/landscape'
import { Collapse, message } from 'antd'
import LandscapeForm from './form'
import { getLandscapes } from '../../../api/landscape/landscape'
import LandscapeTable from './table'
import { StepProps } from '../fullLandscape/steps'

function LandscapePage({ landscapeId, setLandscapeId, visible = true }: StepProps) {
    const [shouldReload, setShouldReload] = useState(true)
    const [landscapes, setLandscapes] = useState<Landscape[]>()

    useEffect(() => {
        if (shouldReload) {
            getLandscapes().then(d => {
                if (d.success) setLandscapes(d.data)
                else message.error('Falha ao buscar paisagens')
                setShouldReload(false)
            })
        }
    }, [shouldReload])

    if (!visible) return null

    return (
        <div className='landscape'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar Paisagem', children: <LandscapeForm success={setShouldReload} setLandscapeId={setLandscapeId} /> }
                ]}
            />
            <LandscapeTable data={landscapes} landscapeId={landscapeId} setLandscapeId={setLandscapeId} />
        </div>
    )
}

export default LandscapePage
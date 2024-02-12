import React, { useEffect, useState } from 'react'
import Landscape from '../../../dataModels/landscape/landscape'
import { Collapse, message } from 'antd'
import LandscapeForm from './form'
import { getLandscapes } from '../../../api/landscape/landscape'
import LandscapeTable from './table'

function LandscapePage() {
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

    return (
        <div className='landscape'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar Paisagem', children: <LandscapeForm success={setShouldReload} /> }
                ]}
            />
            <LandscapeTable data={landscapes} />
        </div>
    )
}

export default LandscapePage
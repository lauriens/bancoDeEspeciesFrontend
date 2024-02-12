import React, { useEffect, useState } from 'react'
import SampleAreaType from '../../../dataModels/landscape/sampleAreaType'
import { Collapse, List, message } from 'antd'
import SampleAreaTypeForm from './form'
import { getSampleAreaTypes } from '../../../api/landscape/sampleAreaType'

function SampleAreaTypePage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [sampleAreaTypes, setSampleAreaTypes] = useState<SampleAreaType[]>()

    useEffect(() => {
        if (shouldReload) {
            getSampleAreaTypes().then(d => {
                if (d.success) setSampleAreaTypes(d.data)
                else message.error('Falha ao buscar tipos de área amostrada')
                setShouldReload(false)
            })
        }
    })

    return (
        <div className='sample-area-type'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[{ key: '1', label: 'Criar tipo de área amostrada', children: <SampleAreaTypeForm success={setShouldReload} /> }]}
            />
            <List
                header={<h1>Tipos de Área Amostrada</h1>}
                bordered
                dataSource={sampleAreaTypes}
                renderItem={(item) => <List.Item>{item.name}</List.Item> }
            />
        </div>
    )
}

export default SampleAreaTypePage
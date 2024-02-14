import React from 'react'
import { StepProps } from './steps'
import { Collapse } from 'antd'
import AnthromePage from '../../landscape/anthrome/anthrome'
import AgroecosystemPage from '../../landscape/agroecosystem/agroecosystem'
import SampleAreaTypePage from '../../landscape/sampleAreaType/sampleAreaType'
import CollectMethodPage from '../../occurrence/collectMethod/collectMethod'

function FirstStep({ visible }: StepProps) {
    if (!visible) return null

    return (
        <div className='occurrence-culture-first-step'>
            <Collapse
                defaultActiveKey={undefined} 
                items={[
                    { key: '1', label: 'Antroma', children: <AnthromePage /> }
                ]}
            />
            <Collapse
                defaultActiveKey={undefined}
                items={[
                    { key: '1', label: 'Agroecossistema', children: <AgroecosystemPage /> }
                ]}
            />
            <Collapse
                defaultActiveKey={undefined}
                items={[
                    { key: '1', label: 'Tipo de Área Amostrada', children: <SampleAreaTypePage /> }
                ]}
            />
            <Collapse
                defaultActiveKey={undefined}
                items={[
                    { key: '1', label: 'Métodos de Coleta', children: <CollectMethodPage /> }
                ]}
            />
        </div>
    )
}

export default FirstStep
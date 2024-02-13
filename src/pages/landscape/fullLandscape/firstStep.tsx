import React from 'react'
import { StepProps } from './steps'
import { Collapse } from 'antd'
import AreaTypePage from '../areaType/areaType'
import BiomePage from '../biome/biome'
import MunicipalityPage from '../municipality/municipality'
import SampleAreaTypePage from '../sampleAreaType/sampleAreaType'
import AgroecosystemPage from '../agroecosystem/agroecosystem'
import AnthromePage from '../anthrome/anthrome'

function FirstStep({ visible }: StepProps) {
    if (!visible) return null

    return (
        <div className='landscape-first-step'>
            <Collapse
                defaultActiveKey={undefined} 
                items={[
                    { key: '1', label: 'Tipo de Área', children: <AreaTypePage /> }
                ]}
            />
            <Collapse
                defaultActiveKey={undefined}
                items={[
                    { key: '1', label: 'Bioma', children: <BiomePage /> }
                ]}
            />
            <Collapse
                defaultActiveKey={undefined}
                items={[
                    { key: '1', label: 'Município', children: <MunicipalityPage /> }
                ]}
            />
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
        </div>
    )
}

export default FirstStep
import React from 'react'
import { StepProps } from './steps'
import { Collapse } from 'antd'
import AreaTypePage from '../areaType/areaType'
import BiomePage from '../biome/biome'
import MunicipalityPage from '../municipality/municipality'
import UfPage from '../uf/uf'

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
        </div>
    )
}

export default FirstStep
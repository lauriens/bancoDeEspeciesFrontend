import React from 'react'
import { StepProps } from './steps'
import { Collapse } from 'antd'
import ReferenceTypePage from '../referenceType/referenceType'
import MaterialDestinationPage from '../materialDestination/materialDestination'
import './firstStep.css'

function FirstStep({ visible }: StepProps) {
    if (!visible) return null

    return (
        <div className='reference-first-step'>
            <Collapse
                defaultActiveKey={undefined} 
                items={[
                    { key: '1', label: 'Tipo de referência', children: <ReferenceTypePage /> }
                ]}
            />
            <Collapse
                defaultActiveKey={undefined}
                items={[
                    { key: '1', label: 'Destino de Material', children: <MaterialDestinationPage /> }
                ]}
            />
        </div>
    )
}

export default FirstStep
import React from 'react'
import { StepProps } from '../../taxonomy/taxonomyTree/steps'
import ReferenceTypeForm from './form'
import { Collapse } from 'antd'

function ReferenceType({ visible = true }: StepProps) {
    return (
        <div className='reference-type'>
            <Collapse
                defaultActiveKey={['1']} items={[{ key: '1', label: 'Criar tipo de referência', children: <ReferenceTypeForm /> }]}
                />
        </div>
    )
}

export default ReferenceType
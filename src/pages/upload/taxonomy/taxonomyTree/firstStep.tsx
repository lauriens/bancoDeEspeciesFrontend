import React from 'react'
import { StepProps, steps } from './steps'
import { Button } from 'antd'
import './firstStep.css'

function FirstStep({ visible, pickStep }: StepProps) {
    if (!visible) return null
    
    return (
        <div className='first-step'>
            <label className='entity-name'> Escolha por onde quer começar </label>
            { steps.slice(1).map(s => (
                <Button className='step-button' type='primary' key={s.key} onClick={() => pickStep(s.key)}>
                    {s.title}
                </Button>
            ))}
        </div>
    )
}

export default FirstStep
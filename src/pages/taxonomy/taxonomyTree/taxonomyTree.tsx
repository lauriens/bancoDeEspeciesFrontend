import { Button, Steps } from 'antd'
import React, { useState } from 'react'
import './taxonomyTree.css'
import { stepContents, steps } from './steps'

function TaxonomyTree() {
    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent(current + 1)
    }

    const prev = () => {
        setCurrent(current - 1)
    }

    const pickStep = (key: string) => {
        setCurrent(steps.findIndex(s => s.key === key) || 0)
    }

    const changeStep = (value: number) => {
        setCurrent(value)
    }

    return (
        <div className='steps'>
            <Steps onChange={changeStep} current={current} items={steps} />
            <div className='step-content'>
                { stepContents.map((c, i) => <div key={c.key}>{ c.content({ visible: current === i, pickStep }) }</div>) }
            </div>
            <div className='step-buttons'>
                {current < steps.length - 1 && (
                <Button type="primary" onClick={next}>
                    Next
                </Button>
                )}
                {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={prev}>
                    Previous
                </Button>
                )}
            </div>
        </div>
    )
}

export default TaxonomyTree
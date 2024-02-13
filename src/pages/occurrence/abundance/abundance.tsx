import React, { useEffect, useState } from 'react'
import { StepProps } from '../../culture/fullCulture/steps'
import Abundance from '../../../dataModels/occurrence/abundance'
import AbundanceForm from './form'
import { Collapse, List, message } from 'antd'
import { getFilteredAbundances } from '../../../api/occurrence/abundance'

function AbundancePage({ visible = true, landscapeId, setLandscapeId, occurrenceId, setOccurrenceId }: StepProps) {
    const [shouldReload, setShouldReload] = useState(true)
    const [abundances, setAbundances] = useState<Abundance[]>()

    useEffect(() => {
        if (shouldReload || (!shouldReload && (landscapeId || occurrenceId))) {
            getFilteredAbundances(landscapeId, occurrenceId).then(d => {
                if (d.success) setAbundances(d.data)
                else message.error('Falha ao buscar abundâncias.')
                setShouldReload(false)
            })
        }
    }, [shouldReload, landscapeId, occurrenceId])

    if (!visible) return null

    return (
        <div className='abundance'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar Abundância', children: 
                        <AbundanceForm 
                            success={setShouldReload} 
                            landscapeId={landscapeId}
                            setLandscapeId={setLandscapeId} 
                            occurrenceId={occurrenceId}
                            setOccurrenceId={setOccurrenceId} 
                        /> }
                ]}
            />
            <List
                header={<h1>Abundâncias</h1>}
                bordered
                dataSource={abundances}
                renderItem={(item) => <List.Item>{item.abundanceValue}</List.Item> }
            />
        </div>
    )
}

export default AbundancePage
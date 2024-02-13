import React, { useEffect, useState } from 'react'
import { StepProps } from '../fullCulture/steps'
import OccurrenceCulture from '../../../dataModels/culture/occurrenceCulture'
import { Collapse, message } from 'antd'
import OccurrenceCultureForm from './form'
import { getFilteredOccurrenceCultures } from '../../../api/culture/occurrenceCulture'
import OccurrenceCultureTable from './table'

function OccurrenceCulturePage({ visible = true, cultureId, setCultureId, occurrenceId, setOccurrenceId }: StepProps) {
    const [shouldReload, setShouldReload] = useState(true)
    const [occurrenceCultures, setOccurrenceCultures] = useState<OccurrenceCulture[]>()

    useEffect(() => {
        if (shouldReload || (!shouldReload && (cultureId || occurrenceId))) {
            getFilteredOccurrenceCultures(cultureId, occurrenceId).then(d => {
                if (d.success) setOccurrenceCultures(d.data)
                else message.error('Falha ao buscar ocorrência - culturas')
            })
            setShouldReload(false)
        }
    }, [shouldReload, occurrenceId, cultureId])

    if (!visible) return null

    return (
        <div className='occurrence-culture'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar Cultura - Ocorrência', children: 
                        <OccurrenceCultureForm 
                            success={setShouldReload} 
                            cultureId={cultureId}
                            setCultureId={setCultureId} 
                            occurrenceId={occurrenceId}
                            setOccurrenceId={setOccurrenceId} 
                        /> }
                ]}
            />
            <OccurrenceCultureTable data={occurrenceCultures} />
        </div>
    )
}

export default OccurrenceCulturePage
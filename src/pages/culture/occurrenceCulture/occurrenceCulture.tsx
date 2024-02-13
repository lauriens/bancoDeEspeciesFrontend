import React, { useEffect, useState } from 'react'
import { StepProps } from '../fullCulture/steps'
import OccurrenceCulture from '../../../dataModels/culture/occurrenceCulture'
import { Collapse, message } from 'antd'
import OccurrenceCultureForm from './form'
import { getOccurrenceCultures } from '../../../api/culture/occurrenceCulture'
import OccurrenceCultureTable from './table'

function OccurrenceCulturePage({ visible = true, cultureId, occurrenceId }: StepProps) {
    const [shouldReload, setShouldReload] = useState(true)
    const [occurrenceCultures, setOccurrenceCultures] = useState<OccurrenceCulture[]>()

    useEffect(() => {
        if (shouldReload) {
            getOccurrenceCultures().then(d => {
                if (d.success) setOccurrenceCultures(d.data)
                else message.error('Falha ao buscar ocorrência - culturas')
            })
            setShouldReload(false)
        }
    })

    if (!visible) return null

    return (
        <div className='occurrence-culture'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar Ocorrência - Cultura', children: <OccurrenceCultureForm success={setShouldReload} cultureId={cultureId} occurrenceId={occurrenceId} /> }
                ]}
            />
            <OccurrenceCultureTable data={occurrenceCultures} />
        </div>
    )
}

export default OccurrenceCulturePage
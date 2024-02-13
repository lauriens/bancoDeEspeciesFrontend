import { Collapse, message } from "antd"
import React, { useEffect, useState } from "react"
import OccurrenceForm from "./form"
import Occurrence from "../../../dataModels/occurrence/occurrence"
import { getOccurrences } from "../../../api/occurrence/occurrence"
import OccurrenceTable from "./table"
import { StepProps } from "../../culture/fullCulture/steps"

function OccurrencePage({ visible = true, occurrenceId, setOccurrenceId }: StepProps) {
    const [shouldReload, setShouldReload] = useState(true)
    const [occurrences, setOccurrences] = useState<Occurrence[]>()

    useEffect(() => {
        if (shouldReload) {
            getOccurrences().then(d => {
                if (d.success) setOccurrences(d.data)
                else message.error('Falha ao buscar ocorrências')
                setShouldReload(false)
            })
        }
    }, [shouldReload])

    if (!visible) return null

    return (
        <div className='occurrence'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[{ key: '1', label: 'Criar ocorrência', children: <OccurrenceForm success={setShouldReload} setOccurrenceId={setOccurrenceId} /> }]}
            />
            <OccurrenceTable data={occurrences} occurrenceId={occurrenceId} setOccurrenceId={setOccurrenceId} />
        </div>
    )
}

export default OccurrencePage
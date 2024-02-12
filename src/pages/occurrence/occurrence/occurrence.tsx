import { Collapse, message } from "antd"
import React, { useEffect, useState } from "react"
import OccurrenceForm from "./form"
import Occurrence from "../../../dataModels/occurrence/occurrence"
import { getOccurrences } from "../../../api/occurrence/occurrence"
import OccurrenceTable from "./table"

function OccurrencePage() {
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

    return (
        <div className='occurrence'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[{ key: '1', label: 'Criar ocorrência', children: <OccurrenceForm success={setShouldReload} /> }]}
            />
            <OccurrenceTable data={occurrences} />
        </div>
    )
}

export default OccurrencePage
import { Collapse } from "antd"
import React, { useState } from "react"
import OccurrenceForm from "./form"

function OccurrencePage() {
    const [shouldReload, setShouldReload] = useState(true)

    return (
        <div className='occurrence'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[{ key: '1', label: 'Criar ocorrência', children: <OccurrenceForm success={setShouldReload} /> }]}
            />
        </div>
    )
}

export default OccurrencePage
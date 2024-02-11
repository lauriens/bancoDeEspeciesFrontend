import { Collapse, message } from 'antd'
import React, { useEffect, useState } from 'react'
import MaterialDestinationForm from './form'
import MaterialDestinationTable from './table'
import MaterialDestination from '../../../dataModels/reference/materialDestination'
import { getMaterialDestinations } from '../../../api/reference/materialDestination'

function MaterialDestinationPage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [materialDestinations, setMaterialDestinations] = useState<MaterialDestination[]>()

    useEffect(() => {
        if (shouldReload) {
            getMaterialDestinations().then(d => {
                if (d.success) setMaterialDestinations(d.data)
                else message.error('Falha ao buscar destinos de material')
                setShouldReload(false)
            })
        }
    }, [shouldReload])

    return (
        <div className='material-destination'>
            <Collapse 
                defaultActiveKey={['1']} 
                items={[{ key: '1', label: 'Criar destino de material', children: <MaterialDestinationForm success={setShouldReload} /> }]}
            />
            <MaterialDestinationTable data={materialDestinations} />
        </div>
    )
}

export default MaterialDestinationPage
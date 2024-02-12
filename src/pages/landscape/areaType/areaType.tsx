import React, { useEffect, useState } from 'react'
import AreaType from '../../../dataModels/landscape/areaType'
import { getAreaTypes } from '../../../api/landscape/areaType'
import { Collapse, List, message } from 'antd'
import AreaTypeForm from './form'
import './areaType.css'

function AreaTypePage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [areaTypes, setAreaTypes] = useState<AreaType[]>()

    useEffect(() => {
        getAreaTypes().then(d => {
            if (d.success) setAreaTypes(d.data)
            else message.error('Falha ao buscar países')
        setShouldReload(false)
        })
    }, [shouldReload])

    return (
        <div className='area-type'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar tipo de área', children: <AreaTypeForm success={setShouldReload} /> }
                ]}
            />
            <List
                header={<h1>Tipos de Área</h1>}
                bordered
                dataSource={areaTypes}
                renderItem={(item) => <List.Item>{item.name}</List.Item> }
            />
        </div>
    )
}

export default AreaTypePage
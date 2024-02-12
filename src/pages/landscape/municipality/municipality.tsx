import React, { useEffect, useState } from 'react'
import Municipality from '../../../dataModels/landscape/municipality'
import { getMunicipalities } from '../../../api/landscape/municipality'
import { Collapse, List, message } from 'antd'
import MunicipalityForm from './form'

function MunicipalityPage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [municipalities, setMunicipalities] = useState<Municipality[]>()

    useEffect(() => {
        if (shouldReload) {
            getMunicipalities().then(d => {
                if (d.success) setMunicipalities(d.data)
                else message.error('Falha ao buscar municípios')
                setShouldReload(false)
            })
        }
    }, [shouldReload])

    return (
        <div className='uf'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar Município', children: <MunicipalityForm success={setShouldReload} /> }
                ]}
            />
            <List
                header={<h1>Municípios</h1>}
                bordered
                dataSource={municipalities}
                renderItem={(item) => <List.Item>{item.name + (item.uf ? ` - ${item.uf.abbreviation}` : '')}</List.Item> }
            />
        </div>
    )
}

export default MunicipalityPage
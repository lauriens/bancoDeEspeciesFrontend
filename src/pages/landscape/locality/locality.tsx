import React, { useEffect, useState } from 'react'
import Locality from '../../../dataModels/landscape/locality'
import { Collapse, message } from 'antd'
import LocalityForm from './form'
import './form.css'
import LocalityTable from './table'
import { getLocalities } from '../../../api/landscape/locality'

function LocalityPage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [localities, setLocalities] = useState<Locality[]>()

    useEffect(() => {
        if (shouldReload) {
            getLocalities().then(d => {
                if (d.success) setLocalities(d.data)
                else message.error('Falha ao buscar localidades')
                setShouldReload(false)
            })
        }
    }, [shouldReload])

    return (
        <div className='locality'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar Localidade', children: <LocalityForm success={setShouldReload} /> }
                ]}
            />
            <LocalityTable data={localities} />
        </div>
    )
}

export default LocalityPage
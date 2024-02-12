import React, { useEffect, useState } from 'react'
import Agroecosystem from '../../../dataModels/landscape/agroecosystem'
import AgroecosystemForm from './form'
import { Collapse, List, message } from 'antd'
import { getAgroecosystems } from '../../../api/landscape/agroecosystem'
import './agroecosystem.css'

function AgroecosystemPage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [agroecosystems, setAgroecosystems] = useState<Agroecosystem[]>()

    useEffect(() => {
        getAgroecosystems().then(d => {
            if (d.success) setAgroecosystems(d.data)
            else message.error('Falha ao buscar agroecossistema')
        setShouldReload(false)
        })
    }, [shouldReload])

    return (
        <div className='agroecosystem'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar agroecossistema', children: <AgroecosystemForm success={setShouldReload} /> }
                ]}
            />
            <List
                header={<h1>Agroecossistemas</h1>}
                bordered
                dataSource={agroecosystems}
                renderItem={(item) => <List.Item>{`${item.name} (${item.abbreviation})`}</List.Item> }
            />
        </div>
    )
}

export default AgroecosystemPage
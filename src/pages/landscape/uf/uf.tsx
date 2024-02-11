import { Collapse, List, message } from 'antd'
import React, { useEffect, useState } from 'react'
import UfForm from './form'
import { getUfs } from '../../../api/landscape/uf'
import Uf from '../../../dataModels/landscape/uf'

function UfPage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [ufs, setUfs] = useState<Uf[]>()

    useEffect(() => {
        if (shouldReload) {
            getUfs().then(d => {
                if (d.success) setUfs(d.data)
                else message.error('Falha ao buscar UFs')
                setShouldReload(false)
            })
        }
    }, [shouldReload])

    return (
        <div className='uf'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar UF', children: <UfForm success={setShouldReload} /> }
                ]}
            />
            <List
                header={<h1>UFs</h1>}
                bordered
                dataSource={ufs}
                renderItem={(item) => <List.Item>{item.name + (item.country ? ` - ${item.country.name}` : '')}</List.Item> }
            />
        </div>
    )
}

export default UfPage
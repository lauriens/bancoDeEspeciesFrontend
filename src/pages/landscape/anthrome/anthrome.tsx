import React, { useEffect, useState } from 'react'
import Anthrome from '../../../dataModels/landscape/anthrome'
import { Collapse, List, message } from 'antd'
import AnthromeForm from './form'
import { getAnthromes } from '../../../api/landscape/anthrome'
import './anthrome.css'

function AnthromePage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [anthromes, setAnthromes] = useState<Anthrome[]>()

    useEffect(() => {
        getAnthromes().then(d => {
            if (d.success) setAnthromes(d.data)
            else message.error('Falha ao buscar países')
        setShouldReload(false)
        })
    }, [shouldReload])

    return (
        <div className='anthrome'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar antroma', children: <AnthromeForm success={setShouldReload} /> }
                ]}
            />
            <List
                header={<h1>Antromas</h1>}
                bordered
                dataSource={anthromes}
                renderItem={(item) => <List.Item>{item.name}</List.Item> }
            />
        </div>
    )
}

export default AnthromePage
import React, { useEffect, useState } from 'react'
import Biome from '../../../dataModels/landscape/biome'
import { Collapse, List, message } from 'antd'
import BiomeForm from './form'
import { getBiomes } from '../../../api/landscape/biome'
import './biome.css'

function BiomePage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [biomes, setBiomes] = useState<Biome[]>()

    useEffect(() => {
        getBiomes().then(d => {
            if (d.success) setBiomes(d.data)
            else message.error('Falha ao buscar países')
        setShouldReload(false)
        })
    }, [shouldReload])

    return (
        <div className='biome'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar bioma', children: <BiomeForm success={setShouldReload} /> }
                ]}
            />
            <List
                header={<h1>Biomas</h1>}
                bordered
                dataSource={biomes}
                renderItem={(item) => <List.Item>{item.name}</List.Item> }
            />
        </div>
    )
}

export default BiomePage
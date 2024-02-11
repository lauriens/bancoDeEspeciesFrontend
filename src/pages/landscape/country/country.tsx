import React, { useEffect, useState } from 'react'
import Country from '../../../dataModels/landscape/country'
import { Collapse, List, message } from 'antd'
import CountryForm from './form'
import { getCountries } from '../../../api/landscape/country'

function CountryPage() {
    const [countries, setCountries] = useState<Country[]>()
    const [shouldReload, setShouldReload] = useState(false)

    useEffect(() => {
        getCountries().then(d => {
            if (d.success) setCountries(d.data)
            else message.error('Falha ao buscar países')
        setShouldReload(false)
        })
    }, [shouldReload])

    return (
        <div className='country'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar país', children: <CountryForm success={setShouldReload} /> }
                ]}
            />
            <List
                header={<h1>Países</h1>}
                bordered
                dataSource={countries}
                renderItem={(item) => <List.Item>{item.name + (item.continentName ? ` - ${item.continentName}` : '')}</List.Item> }
            />
        </div>
    )
}

export default CountryPage
import React, { useEffect, useState } from 'react'
import { StepProps } from '../fullLandscape/steps'
import LandscapeStatistic from '../../../dataModels/landscape/landscapeStatistic'
import LandscapeStatisticForm from './form'
import { Collapse, message } from 'antd'
import LandscapeStatisticTable from './table'
import { getLandscapeStatistics } from '../../../api/landscape/landscapeStatistic'

function LandscapeStatisticPage({ visible, landscapeId }: StepProps) {
    const [shouldReload, setShouldReload] = useState(false)
    const [landscapeStatistics, setLandscapeStatistics] = useState<LandscapeStatistic[]>()

    useEffect(() => {
        if (shouldReload && landscapeId) {
            getLandscapeStatistics(landscapeId).then(d => {
                if (d.success) setLandscapeStatistics(d.data)
                else message.error('Falha em buscar estatísticas da paisagem.')
                setShouldReload(false)
            })
        }
    }, [shouldReload])

    useEffect(() => {
        if (visible && landscapeId) {
            getLandscapeStatistics(landscapeId).then(d => {
                if (d.success) setLandscapeStatistics(d.data)
                else message.error('Falha em buscar estatísticas da paisagem.')
                setShouldReload(false)
            })
        }
    }, [visible, landscapeId])

    if (!visible) return null

    return (
        <div className='landscape-statistic'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar Estatística', children: <LandscapeStatisticForm success={setShouldReload} landscapeId={landscapeId} /> }
                ]}
            />
            <LandscapeStatisticTable data={landscapeStatistics} />
        </div>
    )
}

export default LandscapeStatisticPage
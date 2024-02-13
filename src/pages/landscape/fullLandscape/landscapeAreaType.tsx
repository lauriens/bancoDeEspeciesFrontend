import React, { useEffect, useState } from 'react'
import { StepProps } from './steps'
import AreaType from '../../../dataModels/landscape/areaType'
import { getAreaTypes } from '../../../api/landscape/areaType'
import { InputNumber, Select, message } from 'antd'
import SaveButton from '../../../components/savingNotification'
import { saveLandscapeAreaType } from '../../../api/landscape/landscapeAreaType'

function LandscapeAreaType({ visible, landscapeId }: StepProps) {
    const [areaTypes, setAreaTypes] = useState<AreaType[]>()
    const [percentage, setPercentage] = useState<number>()
    const [areaType, setAreaType] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        if (visible) {
            getAreaTypes().then(d => {
                if (d.success) setAreaTypes(d.data)
                else message.error('Falha ao buscar tipos de área')
            })
        }
    }, [visible])

    useEffect(() => {
        if (shouldReset) reset()
    }, [shouldReset])

    const onChangePercent = (value: number | null) => {
        setPercentage(value || undefined)
    }

    const save = async () => {
        if (!isValid.landscapeId) {
            return {
                success: false,
                error: 'Selecione uma paisagem.'
            }
        }
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios..'
            }
        }

        const landscapeAreaType = {
            landscapeId: landscapeId!,
            areaTypeId: areaType!,
            percentage
        }

        return await saveLandscapeAreaType(landscapeAreaType)
    }

    const reset = () => {
        setAreaType(undefined)
        setPercentage(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        landscapeId: !!landscapeId,
        areaType: !!areaType,
        all: !!landscapeId && !!areaType
    }

    if (!visible) return null

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Porcentagem
            </label>
            <InputNumber value={percentage} onChange={onChangePercent} />
            <label className='input-label col1'>
                Tipo de Área
            </label>
            <Select 
                value={areaType} 
                options={areaTypes?.map(a => { return { label: a.name, value: a.id }})} 
                onChange={setAreaType}
                status={!isValid.areaType && validate ? 'error' : ''}
            />
            <SaveButton className='save-landscape-area' saveFunction={save} entity='Paisagem - Tipo de Área' success={setShouldReset} />
        </div>
    )
}

export default LandscapeAreaType
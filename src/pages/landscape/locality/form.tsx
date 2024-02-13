import React, { useEffect, useState } from 'react'
import SampleAreaType from '../../../dataModels/landscape/sampleAreaType'
import { getSampleAreaTypes, saveSampleAreaType } from '../../../api/landscape/sampleAreaType'
import { Input, InputNumber, Select, message } from 'antd'
import { saveLocality } from '../../../api/landscape/locality'
import SaveButton from '../../../components/savingNotification'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
    setLocalityId: React.Dispatch<React.SetStateAction<number>>
}

function LocalityForm({ success, setLocalityId }: FormProps) {
    const [sampleAreaTypes, setSampleAreaTypes] = useState<SampleAreaType[]>()
    const [name, setName] = useState<string>()
    const [latitude, setLatitude] = useState<number>()
    const [longitude, setLongitude] = useState<number>()
    const [sampleAreaType, setSampleAreaType] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        getSampleAreaTypes().then(d => {
            if (d.success) setSampleAreaTypes(d.data)
            else message.error('Falha em buscar países')
        })
    }, [])

    useEffect(() => {
        if (shouldReset) {
            reset()
            success(true)
        }
    }, [shouldReset])

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onChangeLatitude = (value: number) => {
        setLatitude(value)
    }

    const onChangeLongitude = (value: number) => {
        setLongitude(value)
    }

    const save = async () => {
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const locality = {
            name, 
            latitude,
            longitude,
            sampleAreaTypeId: sampleAreaType
        }

        return await saveLocality(locality).then(r => {
            if (r.id && setLocalityId) setLocalityId(r.id)
            return r
        })
    }

    const reset = () => {
        setName(undefined)
        setLatitude(undefined)
        setLongitude(undefined)
        setSampleAreaType(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        name: (!!name && name !== ''),
        latitude: !!latitude,
        longitude: !!longitude,
        sampleAreaType: !!sampleAreaType,
        all: (!!name && name !== '') && !!latitude && !!longitude && !!sampleAreaType
    }

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Nome
            </label>
            <Input value={name} onChange={onChangeName} status={!isValid.name && validate ? 'error': ''} />
            <label className='input-label col1'>
                Latitude
            </label>
            <InputNumber value={latitude} onChange={onChangeLatitude} status={!isValid.latitude && validate ? 'error': ''} />
            <label className='input-label col1'>
                Longitude
            </label>
            <InputNumber value={longitude} onChange={onChangeLongitude} status={!isValid.longitude && validate ? 'error': ''} />
            <label className='input-label col1'>
                Tipo de Área Amostrada
            </label>
            <Select 
                value={sampleAreaType} 
                options={sampleAreaTypes?.map(c => { return { label: c.name, value: c.id }})} 
                onChange={setSampleAreaType}
                status={!isValid.sampleAreaType && validate ? 'error' : ''}
            />
            <SaveButton className='save-locality' saveFunction={save} entity='Localidade' success={setShouldReset} />
        </div>
    )
}

export default LocalityForm
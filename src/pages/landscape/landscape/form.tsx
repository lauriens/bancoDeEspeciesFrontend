import React, { useEffect, useState } from 'react'
import Agroecosystem from '../../../dataModels/landscape/agroecosystem'
import Anthrome from '../../../dataModels/landscape/anthrome'
import SampleAreaType from '../../../dataModels/landscape/sampleAreaType'
import { ReferenceList } from '../../../dataModels/reference/reference'
import { getSampleAreaTypes } from '../../../api/landscape/sampleAreaType'
import { Checkbox, InputNumber, Select, message } from 'antd'
import { getAgroecosystems } from '../../../api/landscape/agroecosystem'
import { getReferenceList } from '../../../api/reference/reference'
import { getAnthromes } from '../../../api/landscape/anthrome'
import { saveLandscape } from '../../../api/landscape/landscape'
import TextArea from 'antd/es/input/TextArea'
import SaveButton from '../../../components/savingNotification'
import './form.css'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
    setLandscapeId: React.Dispatch<React.SetStateAction<number>>
}

function LandscapeForm({ success, setLandscapeId }: FormProps) {
    const [agroecosystems, setAgroecosystems] = useState<Agroecosystem[]>()
    const [anthromes, setAnthromes] = useState<Anthrome[]>()
    const [sampleAreaTypes, setSampleAreaTypes] = useState<SampleAreaType[]>()
    const [references, setReferences] = useState<ReferenceList[]>()
    const [latitude, setLatitude] = useState<number>()
    const [longitude, setLongitude] = useState<number>()
    const [radius, setRadius] = useState<number>()
    const [description, setDescription] = useState<string>()
    const [isProtected, setIsProtected] = useState<boolean>()
    const [agroecosystem, setAgroecosystem] = useState<number>()
    const [anthrome, setAnthrome] = useState<number>()
    const [sampleAreaType, setSampleAreaType] = useState<number>()
    const [reference, setReference] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        getSampleAreaTypes().then(d => {
            if (d.success) setSampleAreaTypes(d.data)
            else message.error('Falha em buscar tipos de área amostrada')
        })
        getAgroecosystems().then(d => {
            if (d.success) setAgroecosystems(d.data)
            else message.error('Falha em buscar agroecossistemas')
        })
        getReferenceList().then(d => {
            if (d.success) setReferences(d.data)
            else message.error('Falha em buscar estudos')
        })
        getAnthromes().then(d => {
            if (d.success) setAnthromes(d.data)
            else message.error('Falha em buscar antromas')
        })
    }, [])

    useEffect(() => {
        if (shouldReset) {
            reset()
            if (success) success(true)
        }
    }, [shouldReset])

    const onChangeLatitude = (value: number) => {
        setLatitude(value)
    }

    const onChangeLongitude = (value: number) => {
        setLongitude(value)
    }

    const onChangeRadius = (value: number) => {
        setRadius(value)
    }

    const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.currentTarget.value)
    }

    const onChangeIsProtected = () => {
        setIsProtected(!isProtected)
    }

    const save = async () => {
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const landscape = { 
            latitude,
            longitude,
            radius,
            description,
            isProtectedArea: isProtected,
            agroecosystemId: agroecosystem,
            anthromeId: anthrome,
            sampleAreaTypeId: sampleAreaType,
            referenceId: reference
        }

        return saveLandscape(landscape).then(r => {
            if (r.success && setLandscapeId) setLandscapeId(r.id)
            return r
        })
    }

    const reset = () => {
        setLatitude(undefined)
        setLongitude(undefined)
        setRadius(undefined)
        setDescription(undefined)
        setIsProtected(undefined)
        setAgroecosystem(undefined)
        setAnthrome(undefined)
        setSampleAreaType(undefined)
        setReference(undefined)
        setValidate(undefined)
        setShouldReset(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        latitude: !!latitude,
        longitude: !!longitude,
        description: (!!description && description !== ''),
        all: !!latitude && !!longitude && (!!description && description !== '')
    }

    return (
        <div className='landscape-form-grid'>
            <label className='input-label col1'>
                Latitude
            </label>
            <InputNumber value={latitude} onChange={onChangeLatitude} status={!isValid.latitude && validate ? 'error': ''} />
            <label className='input-label col1'>
                Longitude
            </label>
            <InputNumber value={longitude} onChange={onChangeLongitude} status={!isValid.longitude && validate ? 'error': ''} />
            <label className='input-label col1'>
                Raio
            </label>
            <InputNumber value={radius} onChange={onChangeRadius} />
            <label className='input-label col1'>
                Descrição
            </label>
            <TextArea value={description} onChange={onChangeDescription} maxLength={1024} status={!isValid.description && validate ? 'error': ''} />
            <label className='input-label col1'>
                Tipo de Agroecossistema
            </label>
            <Select 
                value={agroecosystem} 
                options={agroecosystems?.map(a => { return { label: a.name, value: a.id }})} 
                onChange={setAgroecosystem}
            />
            <label className='input-label col1'>
                Antroma
            </label>
            <Select 
                value={anthrome} 
                options={anthromes?.map(a => { return { label: a.name, value: a.id }})} 
                onChange={setAnthrome}
            />
            <label className='input-label col1'>
                Tipo de Área Amostrada
            </label>
            <Select 
                value={sampleAreaType} 
                options={sampleAreaTypes?.map(c => { return { label: c.name, value: c.id }})} 
                onChange={setSampleAreaType}
            />
            <label className='input-label col1'>
                Referência
            </label>
            <Select 
                value={reference} 
                options={references?.map(r => { return { label: r.title, value: r.id }})} 
                onChange={setReference}
            />
            <label className='input-label col1'>
                É Área Protegida?
            </label>
            <Checkbox
                checked={isProtected}
                onChange={onChangeIsProtected}
            />
            <SaveButton className='save-landscape' saveFunction={save} entity='Paisagem' success={setShouldReset} />
        </div>
    )
}

export default LandscapeForm
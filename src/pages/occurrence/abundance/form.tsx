import React, { useEffect, useState } from 'react'
import Occurrence from '../../../dataModels/occurrence/occurrence'
import Landscape from '../../../dataModels/landscape/landscape'
import { getLandscapes } from '../../../api/landscape/landscape'
import { Input, Select, message } from 'antd'
import { getOccurrences } from '../../../api/occurrence/occurrence'
import { saveAbundance } from '../../../api/occurrence/abundance'
import SaveButton from '../../../components/savingNotification'
import { formatDate } from '../../../infra/formatData'
import '../../../styles/styles.css'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
    landscapeId?: number
    setLandscapeId?: React.Dispatch<React.SetStateAction<number | undefined>>
    occurrenceId?: number
    setOccurrenceId?: React.Dispatch<React.SetStateAction<number | undefined>>
}

function AbundanceForm({ success, occurrenceId, setOccurrenceId, landscapeId, setLandscapeId }: FormProps) {
    const [occurrences, setOccurrences] = useState<Occurrence[]>()
    const [landscapes, setLandscapes] = useState<Landscape[]>()
    const [value, setValue] = useState<string>()
    const [occurrence, setOccurrence] = useState<number>()
    const [landscape, setLandscape] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        getLandscapes().then(d => {
            if (d.success) setLandscapes(d.data)
            else message.error('Falha em buscar paisagens.')
        })
        getOccurrences().then(d => {
            if (d.success) setOccurrences(d.data)
            else message.error('Falha em buscar ocorrências.')
        })
    }, [])

    useEffect(() => {
        if (shouldReset) {
            reset()
            success(true)
        }
    }, [shouldReset])

    useEffect(() => {
        if (landscapeId) setLandscape(landscapeId)
    }, [landscapeId])

    useEffect(() => {
        if (occurrenceId) setOccurrence(occurrenceId)
    }, [occurrenceId])

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onChangeLandscape = (value: number) => {
        setLandscape(value)
        setLandscapeId(value)
    }

    const onChangeOccurrence = (value: number) => {
        setOccurrence(value)
        setOccurrenceId(value)
    }

    const save = async () => {
        if (!isValid.occurrenceOrLandscape) {
            setValidate(true)
            return {
                success: false,
                error: 'Selecione uma paisagem ou uma ocorrência.'
            }
        }

        if (!isValid.value) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const abundance = {
            landscapeId: landscape,
            occurrenceId: occurrence,
            abundanceValue: value
        }

        return await saveAbundance(abundance)
    }

    const reset = () => {
        setLandscape(undefined)
        setOccurrence(undefined)
        setValue(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        occurrenceOrLandscape: !!occurrence || !!landscape,
        value: (!!value && value !== '')
    }

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Valor da Abundância
            </label>
            <Input value={value} onChange={onChangeValue} status={!isValid.value && validate ? 'error' : ''} />
            <label className='input-label col1'>
                Paisagem
            </label>
            <Select 
                value={landscape} 
                options={landscapes?.map(c => { return { label: `${c.latitude}, ${c.longitude}: ${c.description}`, value: c.id }})}  
                onChange={onChangeLandscape} 
                status={!isValid.occurrenceOrLandscape && validate ? 'error' : ''}
            />
            <label className='input-label col1'>
                Ocorrência
            </label>
            <Select 
                value={occurrence} 
                options={occurrences?.map(c => { return { label: `${c.specie?.genus?.name || ''} ${c.specie?.name || ''}: ${c.locality?.name || ''}: ${formatDate(c.startDate)} - ${formatDate(c.endDate)}`, value: c.id }})} 
                onChange={onChangeOccurrence}
                status={!isValid.occurrenceOrLandscape && validate ? 'error': ''}
            />
            <SaveButton className='save-abundance' saveFunction={save} entity='Abundância' success={setShouldReset} />
        </div>
    )

}

export default AbundanceForm
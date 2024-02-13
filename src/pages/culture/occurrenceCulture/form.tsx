import React, { useEffect, useState } from 'react'
import Culture from '../../../dataModels/culture/culture'
import Occurrence from '../../../dataModels/occurrence/occurrence'
import { getCultures } from '../../../api/culture/culture'
import { Checkbox, Input, InputNumber, Select, message } from 'antd'
import { getOccurrences } from '../../../api/occurrence/occurrence'
import { saveOccurrenceCulture } from '../../../api/culture/occurrenceCulture'
import SaveButton from '../../../components/savingNotification'
import './form.css'
import { formatDate } from '../../../infra/formatData'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
    cultureId?: number
    setCultureId?: React.Dispatch<React.SetStateAction<number | undefined>>
    occurrenceId?: number
    setOccurrenceId?: React.Dispatch<React.SetStateAction<number | undefined>>
}

function OccurrenceCultureForm({ success, cultureId, setCultureId, occurrenceId, setOccurrenceId }: FormProps) {
    const [cultures, setCultures] = useState<Culture[]>()
    const [occurrences, setOccurrences] = useState<Occurrence[]>()
    const [culture, setCulture] = useState<number>()
    const [occurrence, setOccurrence] = useState<number>()
    const [stage, setStage] = useState<string>()
    const [phenology, setPhenology] = useState<string>()
    const [percentage, setPercentage] = useState<number>()
    const [isMajority, setIsMajority] = useState<boolean>()
    const [area, setArea] = useState<number>()
    const [productivity, setProductivity] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        getCultures().then(d => {
            if (d.success) setCultures(d.data)
            else message.error('Falha em buscar culturas.')
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
        if (cultureId) setCulture(cultureId)
    }, [cultureId])

    useEffect(() => {
        if (occurrenceId) setOccurrence(occurrenceId)
    }, [occurrenceId])

    const onChangeStage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStage(e.currentTarget.value)
    }

    const onChangePhenology = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhenology(e.currentTarget.value)
    }

    const onChangeArea = (value: number | null) => {
        setArea(value || undefined)
    }

    const onChangePercent = (value: number | null) => {
        setPercentage(value || undefined)
    }

    const onChangeProductivity = (value: number | null) => {
        setProductivity(value || undefined)
    }

    const onChangeMajority = () => {
        setIsMajority(!isMajority)
    }

    const onChangeCulture = (value: number) => {
        setCulture(value)
        if (setCultureId) setCultureId(value)
    }

    const onChangeOccurrence = (value: number) => {
        setOccurrence(value)
        if (setOccurrenceId) setOccurrenceId(value)
    }

    const save = async () => {
        if (!isValid.culture) {
            setValidate(true)
            return {
                success: false,
                error: 'Selecione uma cultura.'
            }
        }
        if (!isValid.occurrence) {
            setValidate(true)
            return {
                success: false,
                error: 'Selecione uma ocorrência.'
            }
        }

        const occurrenceCulture = {
            cultureId: culture!,
            occurrenceId: occurrence!,
            stage,
            phenology,
            percentage,
            isMajority,
            area,
            productivity
        }

        return await saveOccurrenceCulture(occurrenceCulture)
    }

    const reset = () => {
        setCulture(undefined)
        setOccurrence(undefined)
        setStage(undefined)
        setPhenology(undefined)
        setPercentage(undefined)
        setIsMajority(undefined)
        setArea(undefined)
        setProductivity(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        occurrence: !!occurrence,
        culture: !!culture
    }

    return (
        <div className='occurrence-culture-form-grid'>
            <label className='input-label col1'>
                Cultura
            </label>
            <Select 
                value={culture} 
                options={cultures?.map(c => { return { label: `${c.commonName}: ${c.variety || c.phenology || (c.timeSincePlanting || '' + ' ' + c.timeSincePlantingUnit || '')}`, value: c.id }})} 
                onChange={onChangeCulture}
                status={!isValid.culture && validate ? 'error': ''}
            />
            <label className='input-label col1'>
                Ocorrência
            </label>
            <Select 
                value={occurrence} 
                options={occurrences?.map(c => { return { label: `${c.specie?.genus?.name || ''} ${c.specie?.name || ''}: ${c.locality?.name || ''}: ${formatDate(c.startDate)} - ${formatDate(c.endDate)}`, value: c.id }})} 
                onChange={onChangeOccurrence}
                status={!isValid.occurrence && validate ? 'error': ''}
            />
            <label className='input-label col1'>
                Estágio
            </label>
            <Input value={stage} onChange={onChangeStage} />
            <label className='input-label col1'>
                Fenologia
            </label>
            <Input value={phenology} onChange={onChangePhenology} />
            <label className='input-label col1'>
                Porcentagem
            </label>
            <InputNumber value={percentage} onChange={onChangePercent} />
            <label className='input-label col1'>
                Área
            </label>
            <InputNumber value={area} onChange={onChangeArea} />
            <label className='input-label col1'>
                Produtividade
            </label>
            <InputNumber value={productivity} onChange={onChangeProductivity} />
            <label className='input-label col1'>
                É Maioria?
            </label>
            <Checkbox
                checked={isMajority}
                onChange={onChangeMajority}
            />
            <SaveButton className='save-occurrence-culture' saveFunction={save} entity='Cultura - Ocorrência' success={setShouldReset} />
        </div>
    )
}

export default OccurrenceCultureForm
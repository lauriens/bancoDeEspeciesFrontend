import { DatePicker, Input, InputNumber, Radio, RadioChangeEvent, Select, message } from 'antd'
import { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react'
import { SampleDrawings } from '../../../dataModels/reference/studyCollectMethod'
import { MaterialDestinationList } from '../../../dataModels/reference/materialDestination'
import { getMaterialDestinationList } from '../../../api/reference/materialDestination'
import SaveButton from '../../../components/savingNotification'
import { saveStudyCollectMethod } from '../../../api/reference/studyCollectMethod'
import { ReferenceList } from '../../../dataModels/reference/reference'
import { getReferenceList } from '../../../api/reference/reference'
import './form.css'
import { StepProps } from '../fullReference/steps'
import { formatForSavingDate } from '../../../infra/formatData'
import { RangeValue } from 'rc-picker/lib/interface'

type FormProps = {
    success?: React.Dispatch<React.SetStateAction<boolean>>
}

const { RangePicker } = DatePicker

function StudyCollectMethodForm({ success, visible = true }: FormProps & StepProps) {
    const [materialDestinations, setMaterialDestinations] = useState<MaterialDestinationList[]>()
    const [references, setReferences] = useState<ReferenceList[]>()
    const [sampleDrawing, setSampleDrawing] = useState<number>()
    const [samplingEffort, setSamplingEffort] = useState<number>()
    const [samplingEffortUnit, setSamplingEffortUnit] = useState<string>()
    const [rangeType, setRangeType] = useState<'date' | 'month' | 'year'>('date')
    const [startDate, setStartDate] = useState<Dayjs | null>(null)
    const [endDate, setEndDate] = useState<Dayjs | null>(null)
    const [materialDestination, setMaterialDestination] = useState<number>()
    const [reference, setReference] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        getMaterialDestinationList().then(d => {
            if (d.success) setMaterialDestinations(d.data)
            else message.error('Falha ao buscar opções de destino de material')
        })
        getReferenceList().then(d => {
            if (d.success) setReferences(d.data)
            else message.error('Falha ao buscar lista de referências')
        })
    }, [visible])

    useEffect(() => {
        if (shouldReset) {
            reset()
            if (success) success(true)
        }
    }, [shouldReset])

    const onChangeEffort = (value: number | null) => {
        setSamplingEffort(value || undefined)
    }

    const onChangeEffortUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSamplingEffortUnit(e.currentTarget.value)
    }

    const pickRangeStyle = (e: RadioChangeEvent) => {
        setRangeType(e.target.value)
    }

    const onChangeDates = (values: RangeValue<Dayjs>) => {
        if (values) {
            setStartDate(values[0] || null)
            setEndDate(values[1] || null)
        }
    }
 
    const isValid = {
        all: (!!reference && ((!!sampleDrawing || sampleDrawing === 0)) || 
            (!!samplingEffort && (!!samplingEffortUnit && samplingEffortUnit !== '')) ||
            (!!startDate && !!endDate) ||
            !!materialDestination),
        samplingEffort: ((!!samplingEffort || (!!samplingEffortUnit && samplingEffortUnit !== '')) ? (!!samplingEffort && (!!samplingEffortUnit && samplingEffortUnit !== '')) : true),
        dateRange: ((!!startDate || !!endDate) ? (!!startDate && !!endDate) : true),
        reference: !!reference
    }

    const save = async () => {
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha ao menos um campo, ou verifique se os dados estão válidos.'
            }
        }

        const studyCollectMethod = {
            sampleDrawing,
            samplingEffort,
            samplingEffortUnit,
            collectStartDate: formatForSavingDate(startDate),
            collectEndDate: formatForSavingDate(endDate),
            materialDestinationId: materialDestination,
            referenceId: reference
        }

        return await saveStudyCollectMethod(studyCollectMethod)
    }

    const reset = () => {
        setReference(undefined)
        setSampleDrawing(undefined)
        setSamplingEffort(undefined)
        setSamplingEffortUnit(undefined)
        setStartDate(null)
        setEndDate(null)
        setMaterialDestination(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    if (!visible) return null

    return (
        <div className='study-collect-form'>
            <label className='input-label col1'>
                Referência
            </label>
            <Select 
                value={reference} 
                options={references?.map(r => { return { value: r.id, label: r.title }})} 
                onChange={setReference} 
                status={!isValid.reference && validate ? 'error' : ''} 
            />
            <label className='input-label col1'>
                Desenho Amostral
            </label>
            <Select 
                value={sampleDrawing} 
                options={SampleDrawings.map((s, i) => { return { value: i, label: s }})} 
                onChange={setSampleDrawing} 
            />
            <label className='input-label col1'>
                Esforço Amostral
            </label>
            <InputNumber value={samplingEffort} onChange={onChangeEffort} status={!isValid.samplingEffort && validate ? 'error' : ''} />
            <label className='input-label col1'>
                Unidade de Esforço Amostral
            </label>
            <Input value={samplingEffortUnit} onChange={onChangeEffortUnit} status={!isValid.samplingEffort && validate ? 'error' : ''} />
            <label className='input-label col1'>
                Período de Coleta
            </label>
            <label className='input-label date-range'>
                Especificidade do dado
                <Radio.Group onChange={pickRangeStyle} defaultValue='date'>
                    <Radio.Button value='date'>Dia</Radio.Button>
                    <Radio.Button value='month'>Mês</Radio.Button>
                    <Radio.Button value='year'>Ano</Radio.Button>
                </Radio.Group>
                <RangePicker picker={rangeType} allowEmpty={ [true, true] } value={[startDate, endDate]} onChange={onChangeDates} status={!isValid.dateRange && validate ? 'error' : ''} />
            </label>
            <label className='input-label col1'>
                Destino do Material
            </label>
            <Select 
                allowClear 
                value={materialDestination} 
                options={materialDestinations?.map(d => { return { value: d.id, label: d.name }})} 
                onChange={setMaterialDestination}
            />
            <SaveButton className='save-study-method' saveFunction={save} entity='Método de Coleta do Estudo' success={setShouldReset} />
        </div>
    )
}

export default StudyCollectMethodForm
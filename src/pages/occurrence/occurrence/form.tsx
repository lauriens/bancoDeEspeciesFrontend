import React, { useEffect, useState } from 'react'
import Specie from '../../../dataModels/taxonomy/specie'
import ThreatDegree from '../../../dataModels/occurrence/threatDegree'
import CollectMethod from '../../../dataModels/occurrence/collectMethod'
import { ReferenceList } from '../../../dataModels/reference/reference'
import Locality from '../../../dataModels/landscape/locality'
import User from '../../../dataModels/user'
import dayjs, { Dayjs } from 'dayjs'
import { getSpecies } from '../../../api/taxonomy/specie'
import { Checkbox, DatePicker, Input, Select, message } from 'antd'
import { getCollectMethods } from '../../../api/occurrence/collectMethod'
import { getReferenceList } from '../../../api/reference/reference'
import { getLocalities } from '../../../api/landscape/locality'
import { getUsers } from '../../../api/user/user'
import { getSpecieThreatDegrees } from '../../../api/occurrence/threatDegree'
import { OccurrenceTypes } from '../../../dataModels/occurrence/occurrence'
import SaveButton from '../../../components/savingNotification'
import { saveOccurrence } from '../../../api/occurrence/occurrence'
import './form.css'

const { RangePicker, TimePicker } = DatePicker
const { TextArea } = Input

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function OccurrenceForm({ success }: FormProps) {
    const [species, setSpecies] = useState<Specie[]>()
    const [threatDegrees, setThreatDegrees] = useState<ThreatDegree[]>()
    const [collectMethods, setCollectMethods] = useState<CollectMethod[]>()
    const [references, setReferences] = useState<ReferenceList[]>()
    const [localities, setLocalities] = useState<Locality[]>()
    const [users, setUsers] = useState<User[]>()
    const [startDate, setStartDate] = useState<Dayjs>()
    const [endDate, setEndDate] = useState<Dayjs>()
    const [time, setTime] = useState<Dayjs>()
    const [type, setType] = useState<number>()
    const [isSnuc, setIsSnuc] = useState<boolean>(false)
    const [duplicate, setDuplicate] = useState<boolean>()
    const [review, setReview] = useState<string>()
    const [threatDegree, setThreatDegree] = useState<number>()
    const [method, setMethod] = useState<number>()
    const [specie, setSpecie] = useState<number>()
    const [reference, setReference] = useState<number>()
    const [locality, setLocality] = useState<number>()
    const [user, setUser] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        getSpecies().then(d => {
            if (d.success) setSpecies(d.data)
            else message.error('Falha em buscar espécies')
        })
        getCollectMethods().then(d => {
            if (d.success) setCollectMethods(d.data)
            else message.error('Falha em buscar métodos de coleta')
        })
        getReferenceList().then(d => {
            if (d.success) setReferences(d.data)
            else message.error('Falha em buscar estudos')
        })
        getLocalities().then(d => {
            if (d.success) setLocalities(d.data)
            else message.error('Falha em buscar localidades')
        })
        getUsers().then(d => {
            if (d.success) setUsers(d.data)
            else message.error('Falha em buscar usuários')
        })
    }, [])

    useEffect(() => {
        if (specie) {
            getSpecieThreatDegrees(specie).then(d => {
                if (d.success) setThreatDegrees(d.data)
                else message.error('Falha em buscar graus de ameaça')
            })
        }
    }, [specie])

    useEffect(() => {
        if (shouldReset) {
            reset()
            success(true)
        }
    }, [shouldReset])

    const onChangeRange = ([start, end]: Dayjs[]) => {
        setStartDate(start)
        setEndDate(end)
    }

    const onChangeTime = (newTime: Dayjs) => {
        setTime(newTime)
    }

    const onChangeReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReview(e.currentTarget.value)
    }

    const onChangeIsSnuc = () => {
        setIsSnuc(!isSnuc)
    }

    const onChangeDuplicate = () => {
        setDuplicate(!duplicate)
    }

    const save = async () => {
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios e verifique se os dados estão válidos.'
            }
        }

        const occurrence = {
            startDate: startDate?.format('YYYY-MM-DD'),
            endDate: startDate?.format('YYYY-MM-DD'),
            occurrenceType: type,
            occurrenceTime: time?.format('YYYY-MM-DDTHH:ss'),
            isSnucOccurrence: isSnuc,
            isDuplicate: duplicate,
            reviewerObservation: review,
            threatDegreeId: threatDegree,
            occurrenceMethodId: method,
            specieId: specie,
            referenceId: reference,
            localityId: locality,
            createdBy: user
        }

        return await saveOccurrence(occurrence)
    }

    const reset = () => {
        setStartDate(undefined)
        setEndDate(undefined)
        setTime(undefined)
        setType(undefined)
        setIsSnuc(false)
        setDuplicate(undefined)
        setReview(undefined)
        setThreatDegree(undefined)
        setMethod(undefined)
        setSpecie(undefined)
        setReference(undefined)
        setLocality(undefined)
        setUser(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        specie: !!specie,
        user: !!user,
        type: !!type,
        dateRange: ((!!startDate || !!endDate) ? !!startDate && !!endDate : true),
        all: (!!specie && !!user && !!type) && ((!!startDate || !!endDate) ? !!startDate && !!endDate : true)
    }

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Espécie
            </label>
            <Select 
                value={specie} 
                options={species?.map(s => { return { label: `${s.genus?.name} ${s.name}`, value: s.id }})} 
                onChange={setSpecie} 
                status={!isValid.specie && validate ? 'error' : ''}
            />
            <label className='input-label col1'>
                Período/Data da Ocorrência
            </label>
            <RangePicker 
                value={[startDate, endDate]} 
                onChange={onChangeRange} 
                status={!isValid.dateRange && validate ? 'error' : ''}
            />
            <label className='input-label col1'>
                Hora da Ocorrência
            </label>
            <TimePicker value={time} onChange={onChangeTime} format='HH:mm' />
            <label className='input-label col1'>
                Localidade
            </label>
            <Select 
                value={locality} 
                options={localities?.map(l => { return { label: `${l.name}: ${l.latitude}, ${l.longitude}`, value: l.id }})} 
                onChange={setLocality} 
            />
            <label className='input-label col1'>
                Tipo de Ocorrência
            </label>
            <Select 
                value={type} 
                options={OccurrenceTypes?.map((t, i) => { return { label: t, value: i }})} 
                onChange={setType} 
                status={!isValid.type && validate ? 'error' : ''} 
            />
            <label className='input-label col1'>
                Grau de Ameaça
            </label>
            <Select 
                value={threatDegree} 
                options={threatDegrees?.map(t => { return { label: `${t.classification} ${t.source} - ${dayjs(t.resolutionDate).format('DD/MM/YYYY')}`, value: t.id }})} 
                onChange={setThreatDegree} 
            />
            <label className='input-label col1'>
                Revisor
            </label>
            <Select 
                value={user} 
                options={users?.map(u => { return { label: u.fullName, value: u.id }})} 
                onChange={setUser}
                status={!isValid.user && validate ? 'error' : ''} 
            />
            <label className='input-label col1'>
                Observação do Revisor
            </label>
            <TextArea value={review} onChange={onChangeReview} maxLength={2048} />
            <label className='input-label col1'>
                Método de Coleta
            </label>
            <Select 
                value={method} 
                options={collectMethods?.map(c => { return { label: c.name, value: c.id }})} 
                onChange={setMethod} 
            />
            <label className='input-label col1'>
                Estudo
            </label>
            <Select 
                value={reference} 
                options={references?.map(r => { return { label: r.title, value: r.id }})} 
                onChange={setReference} 
            />
            <label className='input-label col1'>
                É Snuc?
            </label>
            <Checkbox
                checked={isSnuc}
                onChange={onChangeIsSnuc}
            />
            <label className='input-label col1'>
                É duplicata?
            </label>
            <Checkbox
                checked={duplicate}
                onChange={onChangeDuplicate}
            />
            <SaveButton className='save-occurrence' saveFunction={save} entity='Ocorrência' success={setShouldReset} />
        </div>
    )
}

export default OccurrenceForm
import { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react'
import Uf from '../../../dataModels/landscape/uf'
import Country from '../../../dataModels/landscape/country'
import { getUfs } from '../../../api/landscape/uf'
import { DatePicker, Input, Select, message } from 'antd'
import { getCountries } from '../../../api/landscape/country'
import { getSpecies } from '../../../api/taxonomy/specie'
import { ThreatDegreeSources } from '../../../dataModels/occurrence/threatDegree'
import SaveButton from '../../../components/savingNotification'
import { saveThreatDegree } from '../../../api/occurrence/threatDegree'
import Specie from '../../../dataModels/taxonomy/specie'
import './form.css'
import { formatForSavingDate } from '../../../infra/formatData'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function ThreatDegreeForm({ success }: FormProps) {
    const [ufs, setUfs] = useState<Uf[]>()
    const [countries, setCountries] = useState<Country[]>()
    const [species, setSpecies] = useState<Specie[]>()
    const [classification, setClassification] = useState<string>()
    const [resolutionDate, setResolutionDate] = useState<Dayjs | null>(null)
    const [source, setSource] = useState<number>()
    const [uf, setUf] = useState<number>()
    const [country, setCountry] = useState<number>()
    const [specie, setSpecie] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        getUfs().then(d => {
            if (d.success) setUfs(d.data)
            else message.error('Falha ao buscar UFs')
        })
        getCountries().then(d => {
            if (d.success) setCountries(d.data)
            else message.error('Falha ao buscar psíses')
        })
        getSpecies().then(d => {
            if (d.success) setSpecies(d.data)
            else message.error('Falha ao buscar espécies')
        })
    }, [])

    useEffect(() => {
        if (shouldReset) {
            reset()
            success(true)
        }
    }, [shouldReset])

    const onChangeClassification = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClassification(e.currentTarget.value)
    }

    const reset = () => {
        setClassification(undefined)
        setResolutionDate(null)
        setSource(undefined)
        setUf(undefined)
        setCountry(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        classification: (!!classification && classification !== ''),
        date: !!resolutionDate,
        source: (!!source || source === 0),
        specie: !!specie,
        all: (
            (!!classification && classification !== '') &&
            !!resolutionDate &&
            (!!source || source === 0) &&
            !!specie
        )
    }

    const save = async () => {
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios e verifique se os dados estão válidos.'
            }
        }

        const threatDegree = {
            classification: classification!,
            resolutionDate: formatForSavingDate(resolutionDate!)!,
            source: source!,
            specieId: specie!,
            ufId: uf,
            countryId: country
        }

        return await saveThreatDegree(threatDegree)
    }

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Classificação
            </label>
            <Input value={classification} onChange={onChangeClassification} status={!isValid.classification && validate ? 'error': ''} />
            <label className='input-label col1'>
                Data da Resolução
            </label>
            <DatePicker picker='date' value={resolutionDate} onChange={setResolutionDate} status={!isValid.date && validate ? 'error': ''} />
            <label className='input-label col1'>
                Fonte
            </label>
            <Select 
                value={source} 
                options={ThreatDegreeSources.map((s, i) => { return { value: i, label: s }})} 
                onChange={setSource} 
                status={!isValid.source && validate ? 'error': ''}
            />
            <label className='input-label col1'>
                País
            </label>
            <Select 
                allowClear
                value={country} 
                options={countries?.map(c => { return { label: c.name, value: c.id }})} 
                onChange={setCountry} 
            />
            <label className='input-label col1'>
                UF
            </label>
            <Select 
                allowClear
                value={uf} 
                options={ufs?.map(c => { return { label: c.name, value: c.id }})} 
                onChange={setUf} 
            />
            <label className='input-label col1'>
                Espécie
            </label>
            <Select 
                value={specie} 
                options={species?.map(c => { return { label: `${c.genus?.name || ''} ${c.name}`, value: c.id }})} 
                onChange={setSpecie} 
                status={!isValid.specie && validate ? 'error': ''}
            />
            <SaveButton className='save-threat-degree' saveFunction={save} entity='Grau de Ameaça' success={setShouldReset} />
        </div>
    )
}

export default ThreatDegreeForm
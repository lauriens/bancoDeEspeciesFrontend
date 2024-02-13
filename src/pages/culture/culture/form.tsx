import React, { useEffect, useState } from 'react'
import Landscape from '../../../dataModels/landscape/landscape'
import CultureSpecie from '../../../dataModels/taxonomy/cultureSpecie'
import { getLandscapes, saveLandscape } from '../../../api/landscape/landscape'
import { Input, InputNumber, Select, message } from 'antd'
import { saveCulture } from '../../../api/culture/culture'
import SaveButton from '../../../components/savingNotification'
import { SpecieTypes, timeSincePlantingUnits } from '../../../dataModels/culture/culture'
import './form.css'
import { getCultureSpecies } from '../../../api/taxonomy/cultureSpecie'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
    landscapeId?: number
    setCultureId?: React.Dispatch<React.SetStateAction<number>>
}

function CultureForm({ success, landscapeId, setCultureId }: FormProps) {
    const [landscapes, setLandscapes] = useState<Landscape[]>()
    const [species, setSpecies] = useState<CultureSpecie[]>()
    const [commonName, setCommonName] = useState<string>()
    const [variety, setVariety] = useState<string>()
    const [phenology, setPhenology] = useState<string>()
    const [plantedArea, setPlantedArea] = useState<number>()
    const [timeSincePlanting, setTimeSincePlanting] = useState<number>()
    const [timeSincePlantingUnit, setTimeSincePlantingUnit] = useState<number>()
    const [speciesType, setSpeciesType] = useState<number>()
    const [specie, setSpecie] = useState<number>()
    const [landscape, setLandscape] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        getLandscapes().then(d => {
            if (d.success) setLandscapes(d.data)
            else message.error('Falha em buscar paisagens')
        })
        getCultureSpecies().then(d => {
            if (d.success) setSpecies(d.data)
            else message.error('Falha em buscar espécies')
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

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommonName(e.currentTarget.value)
    }

    const onChangeVariety = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVariety(e.currentTarget.value)
    }

    const onChangePhenology = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhenology(e.currentTarget.value)
    }

    const onChangeArea = (value: number) => {
        setPlantedArea(value)
    }

    const onChangeTime = (value: number) => {
        setTimeSincePlanting(value)
    }

    const save = async () => {
        if (!isValid.landscape) {
            setValidate(true)
            return {
                success: false,
                error: 'Selecione uma paisagem.'
            }
        }
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const culture = {
            commonName, 
            variety,
            phenology,
            plantedArea,
            timeSincePlanting,
            timeSincePlantingUnit,
            speciesType,
            specieId: specie,
            landscapeId: landscape
        }

        return await saveCulture(culture).then(r => {
            if (r.id && setCultureId) setCultureId(r.id)
            return r
        })
    }

    const reset = () => {
        setCommonName(undefined)
        setVariety(undefined)
        setPhenology(undefined)
        setPlantedArea(undefined)
        setTimeSincePlanting(undefined)
        setTimeSincePlantingUnit(undefined)
        setSpeciesType(undefined)
        setSpecie(undefined)
        setLandscape(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        commonName: (!!commonName && commonName !== ''),
        speciesType: !!speciesType,
        landscape: !!landscape,
        all: (!!commonName && commonName !== '') && !!speciesType && !!landscape
    }

    return (
        <div className='culture-form-grid'>
            <label className='input-label col1'>
                Nome Comum
            </label>
            <Input value={commonName} onChange={onChangeName} status={!isValid.commonName && validate ? 'error': ''} />
            <label className='input-label col1'>
                Variedade
            </label>
            <Input value={variety} onChange={onChangeVariety} />
            <label className='input-label col1'>
                Fenologia
            </label>
            <Input value={phenology} onChange={onChangePhenology} />
            <label className='input-label col1'>
                Área Plantada
            </label>
            <InputNumber value={plantedArea} onChange={onChangeArea} />
            <label className='input-label col1'>
                Tempo Desde o Plantio
            </label>
            <InputNumber value={timeSincePlanting} onChange={onChangeTime} />
            <label className='input-label col1'>
                Unidade de Tempo
            </label>
            <Select 
                value={timeSincePlantingUnit} 
                options={timeSincePlantingUnits?.map((c, i) => { return { label: c, value: i }})} 
                onChange={setTimeSincePlantingUnit}
            />
            <label className='input-label col1'>
                Tipo da Espécie
            </label>
            <Select 
                value={speciesType} 
                options={SpecieTypes?.map((c, i) => { return { label: c, value: i }})} 
                onChange={setSpeciesType}
                status={!isValid.speciesType && validate ? 'error': ''}
            />
            <label className='input-label col1'>
                Espécie
            </label>
            <Select 
                value={specie} 
                options={species?.map(c => { return { label: c.name, value: c.id }})} 
                onChange={setSpecie}
            />
            <label className='input-label col1'>
                Paisagem
            </label>
            <Select 
                value={landscape} 
                options={landscapes?.map(c => { return { label: `${c.latitude}, ${c.longitude}: ${c.description}`, value: c.id }})} 
                onChange={setLandscape}
                status={!isValid.landscape && validate ? 'error': ''}
            />
            <SaveButton className='save-culture' saveFunction={save} entity='Cultura' success={setShouldReset} />
        </div>
    )
}

export default CultureForm
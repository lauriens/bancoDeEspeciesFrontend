import { Input, Select, message } from 'antd'
import React, { useEffect, useState } from 'react'
import SaveButton from '../../../components/savingNotification'
import { saveUf } from '../../../api/landscape/uf'
import './form.css'
import Country from '../../../dataModels/landscape/country'
import { getCountries } from '../../../api/landscape/country'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function UfForm({ success }: FormProps) {
    const [countries, setCountries] = useState<Country[]>()
    const [name, setName] = useState<string>()
    const [abbreviation, setAbbreviation] = useState<string>()
    const [country, setCountry] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        getCountries().then(d => {
            if (d.success) setCountries(d.data)
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

    const onChangeAbbr = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAbbreviation(e.currentTarget.value)
    }

    const save = async () => {
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const uf = {
            name, 
            abbreviation,
            countryId: country
        }

        return await saveUf(uf)
    }

    const reset = () => {
        setName(undefined)
        setAbbreviation(undefined)
        setCountry(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        name: (!!name && name !== ''),
        abbr: (!!abbreviation && abbreviation !== ''),
        all: (!!name && name !== '') && (!!abbreviation && abbreviation !== '')
    }

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Nome
            </label>
            <Input value={name} onChange={onChangeName} status={!isValid.name && validate ? 'error': ''} />
            <label className='input-label col1'>
                Abreviação
            </label>
            <Input value={abbreviation} onChange={onChangeAbbr} status={!isValid.abbr && validate ? 'error': ''} />
            <label className='input-label col1'>
                País
            </label>
            <Select value={country} options={countries?.map(c => { return { label: c.name, value: c.id }})} onChange={setCountry} />
            <SaveButton className='save-uf' saveFunction={save} entity='UF' success={setShouldReset} />
        </div>
    )
}

export default UfForm
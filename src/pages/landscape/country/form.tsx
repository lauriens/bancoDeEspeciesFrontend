import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import SaveButton from '../../../components/savingNotification'
import { saveCountry } from '../../../api/landscape/country'
import './form.css'
import '../../../styles/styles.css'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function CountryForm({ success }: FormProps) {
    const [name, setName] = useState<string>()
    const [continentName, setContinentName] = useState<string>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        if (shouldReset) {
            reset()
            success(true)
        }
    }, [shouldReset])

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onChangeContinent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContinentName(e.currentTarget.value)
    }

    const save = async () => {
        if (!isValid) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const country = {
            name, 
            continentName
        }

        return await saveCountry(country)
    }

    const reset = () => {
        setName(undefined)
        setContinentName(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = (!!name && name !== '')

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Nome
            </label>
            <Input value={name} onChange={onChangeName} status={!isValid && validate ? 'error': ''} />
            <label className='input-label col1'>
                Continente
            </label>
            <Input value={continentName} onChange={onChangeContinent} />
            <SaveButton className='save-country' saveFunction={save} entity='País' success={setShouldReset} />
        </div>
    )
}

export default CountryForm
import { Input, Select, message } from 'antd'
import React, { useEffect, useState } from 'react'
import SaveButton from '../../../components/savingNotification'
import { saveAgroecosystem } from '../../../api/landscape/agroecosystem'
import './form.css'
import '../../../styles/styles.css'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function AgroecosystemForm({ success }: FormProps) {
    const [name, setName] = useState<string>()
    const [abbreviation, setAbbreviation] = useState<string>()
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

        const agroecosystem = {
            name, 
            abbreviation
        }

        return await saveAgroecosystem(agroecosystem)
    }

    const reset = () => {
        setName(undefined)
        setAbbreviation(undefined)
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
            <SaveButton className='save-agroecosystem' saveFunction={save} entity='Agroecossistema' success={setShouldReset} />
        </div>
    )
}

export default AgroecosystemForm
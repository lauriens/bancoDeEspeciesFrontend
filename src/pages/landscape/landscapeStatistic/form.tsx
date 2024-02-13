import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import SaveButton from '../../../components/savingNotification'
import { saveLandscapeStatistic } from '../../../api/landscape/landscapeStatistic'
import '../../../styles/styles.css'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
    landscapeId?: number
}

function LandscapeStatisticForm({ success, landscapeId }: FormProps) {
    const [name, setName] = useState<string>()
    const [value, setValue] = useState<string>()
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

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const save = async () => {
        if (!isValid.landscapeId) {
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

        const landscapeStatistic = {
            name: name!, 
            value: value!,
            landscapeId: landscapeId!
        }

        return await saveLandscapeStatistic(landscapeStatistic)
    }

    const isValid = {
        name: (!!name && name !== ''),
        value: (!!value && value !== ''),
        landscapeId: !!landscapeId,
        all: (!!name && name !== '') && (!!value && value !== '') && !!landscapeId
    }

    const reset = () => {
        setName(undefined)
        setValue(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Nome
            </label>
            <Input value={name} onChange={onChangeName} status={!isValid.name && validate ? 'error': ''} />
            <label className='input-label col1'>
                Valor
            </label>
            <Input value={value} onChange={onChangeValue} status={!isValid.value && validate ? 'error': ''} />
            <SaveButton className='save-statistic' saveFunction={save} entity='Estatística da Paisagem' success={setShouldReset} />
        </div>
    )
}

export default LandscapeStatisticForm
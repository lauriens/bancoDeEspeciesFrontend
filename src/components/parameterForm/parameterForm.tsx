import React, { useEffect, useState } from 'react'
import SaveResponse from '../../dataModels/saveResponse'
import { Input } from 'antd'
import SaveButton from '../savingNotification'
import './parameterForm.css'
import '../../styles/styles.css'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
    entityName: string
    saveFunction: (data: CreateGenericParameter) => Promise<SaveResponse>
}

function ParameterForm({ success, entityName, saveFunction }: FormProps) {
    const [name, setName] = useState<string>()
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

    const save = async () => {
        if (!isValid) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const parameter = {
            name
        }

        return await saveFunction(parameter)
    }

    const reset = () => {
        setName(undefined)
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
            <SaveButton className='save-parameter' saveFunction={save} entity={entityName} success={setShouldReset} />
        </div>
    )
}

export default ParameterForm
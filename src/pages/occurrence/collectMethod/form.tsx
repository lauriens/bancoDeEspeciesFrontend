import { Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { MethodType } from '../../../dataModels/occurrence/collectMethod'
import SaveButton from '../../../components/savingNotification'
import { saveCollectMethod } from '../../../api/occurrence/collectMethod'
import './form.css'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function CollectMethodForm({ success }: FormProps) {
    const [name, setName] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [type, setType] = useState<number>()
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

    const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
    }

    const isValid = {
        name: (!!name && name !== ''),
        type: (!!type || type === 0),
        all: (!!name && name !== '') && (!!type || type === 0)
    }

    const reset = () => {
        setName(undefined)
        setDescription(undefined)
        setType(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const save = async () => {
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const collectMethod = {
            name,
            description,
            type
        }

        return await saveCollectMethod(collectMethod)
    }

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Nome
            </label>
            <Input value={name} onChange={onChangeName} status={!isValid.name && validate ? 'error': ''} />
            <label className='input-label col1'>
                Descrição
            </label>
            <Input value={description} onChange={onChangeDescription} />
            <label className='input-label col1'>
                Tipo
            </label>
            <Select 
                value={type} 
                options={MethodType?.map((c, i) => { return { label: c, value: i }})} 
                onChange={setType} 
                status={!isValid.type && validate ? 'error' : ''}
            />
            <SaveButton className='save-collect-method' saveFunction={save} entity='Método de Coleta' success={setShouldReset} />
        </div>
    )
}

export default CollectMethodForm
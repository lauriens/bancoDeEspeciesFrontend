import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import SaveButton from '../../../components/savingNotification'
import { saveMaterialDestination } from '../../../api/reference/materialDestination'
import './form.css'
import '../../../styles/styles.css'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function MaterialDestinationForm({ success }: FormProps) {
    const [name, setName] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [gbifId, setGbifId] = useState<string>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        if (shouldReset) reset()
    }, [shouldReset])

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
    }

    const onChangeGbifId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGbifId(e.currentTarget.value)
    }

    const isValid = (!!name && name !== '')

    const save = async () => {
        if (!isValid) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const materialDestination = {
            name,
            description,
            gbifId
        }

        return await saveMaterialDestination(materialDestination)
    }

    const reset = () => {
        setName(undefined)
        setDescription(undefined)
        setGbifId(undefined)
        setValidate(false)
        setShouldReset(false)
        success(true)
    }

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Nome
            </label>
            <Input value={name} onChange={onNameChange} status={!isValid && validate ? 'error' : ''} />
            <label className='input-label col1'>
                Descrição
            </label>
            <Input value={description} onChange={onDescriptionChange} />
            <label className='input-label col1'>
                Id no GBIF
            </label>
            <Input value={gbifId} onChange={onChangeGbifId} />
            <SaveButton className='save-material' saveFunction={save} entity='Destino do Material' success={setShouldReset} />
        </div>
    )
}

export default MaterialDestinationForm
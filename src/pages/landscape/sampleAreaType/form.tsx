import { Checkbox, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import SaveButton from '../../../components/savingNotification'
import './form.css'
import { saveSampleAreaType } from '../../../api/landscape/sampleAreaType'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function SampleAreaTypeForm({ success }: FormProps) {
    const [name, setName] = useState<string>()
    const [isSnuc, setIsSnuc] = useState<boolean>()
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

    const onChangeIsSnuc = () => {
        setIsSnuc(!isSnuc)
    }

    const save = async () => {
        if (!isValid) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const sampleAreaType = {
            name, 
            isSnuc
        }

        return await saveSampleAreaType(sampleAreaType)
    }

    const reset = () => {
        setName(undefined)
        setIsSnuc(false) //to force "clean" the checkbox
        setIsSnuc(undefined)
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
                É Snuc?
            </label>
            <Checkbox value={isSnuc} onChange={onChangeIsSnuc} />
            <SaveButton className='save-sample-area' saveFunction={save} entity='Tipo de Área Amostrada' success={setShouldReset} />
        </div>
    )
}

export default SampleAreaTypeForm
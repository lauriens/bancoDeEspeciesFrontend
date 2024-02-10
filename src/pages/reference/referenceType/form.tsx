import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import SaveButton from '../../../components/savingNotification'
import { CreateReferenceType } from '../../../dataModels/reference/referenceType'
import { saveReferenceType } from '../../../api/reference/referenceType'
import './form.css'

function ReferenceTypeForm() {
    const [referenceTypeName, setReferenceTypeName] = useState<string>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        if (shouldReset) reset()
    }, [shouldReset])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReferenceTypeName(e.currentTarget.value)
    }

    const save = async () => {
        if (!isValid) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }
        const referenceType: CreateReferenceType = {
            typeName: referenceTypeName
        }
        return saveReferenceType(referenceType)
    }

    const reset = () => {
        setReferenceTypeName('')
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = (!!referenceTypeName && referenceTypeName !== '')

    return (
        <div className='reference-type-form'>
            <label className='input-label'>
                Nome
                <Input className='reference-type-name' value={referenceTypeName} onChange={onChange} status={!isValid && validate ? 'error' : ''} />
            </label>
            <SaveButton saveFunction={save} entity='Tipo de Referência' success={setShouldReset} />
        </div> 
    )
}

export default ReferenceTypeForm
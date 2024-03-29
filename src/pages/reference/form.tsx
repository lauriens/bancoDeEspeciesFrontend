import React, { useEffect, useState } from 'react'
import ReferenceType from '../../dataModels/reference/referenceType'
import { Input, InputNumber, Select, message } from 'antd'
import SaveButton from '../../components/savingNotification'
import { getReferenceTypes } from '../../api/reference/referenceType'
import { CreateReference } from '../../dataModels/reference/reference'
import { saveReference } from '../../api/reference/reference'
import './form.css'
import { StepProps } from './fullReference/steps'
import '../../styles/styles.css'

type FormProps = {
    success?: React.Dispatch<React.SetStateAction<boolean>>
}

function ReferenceForm({ success, visible }: FormProps & StepProps) {
    const [referenceTypes, setReferenceTypes] = useState<ReferenceType[]>()
    const [referenceTitle, setReferenceTitle] = useState<string>()
    const [authorName, setAuthorName] = useState<string>()
    const [year, setYear] = useState<number>()
    const [referenceType, setReferenceType] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(true)

    useEffect(() => {
        getReferenceTypes().then(d => {
            if (d.success) setReferenceTypes(d.data)
            else message.error('Falha ao buscar tipos de referência')
        })
    }, [visible])

    useEffect(() => {
        if (shouldReset) {
            reset()
            if (success) success(true)
        }
    }, [shouldReset])

    const reset = () => {
        setReferenceTitle(undefined)
        setAuthorName(undefined)
        setYear(undefined)
        setReferenceType(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReferenceTitle(e.currentTarget.value)
    }

    const onChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthorName(e.currentTarget.value)
    }

    const onChangeYear = (value: number | null) => {
        setYear(value || undefined)
    }

    const isValid = {
        title: (!!referenceTitle && referenceTitle !== ''),
        author: (!!authorName && authorName !== ''),
        year: !!year,
        referenceType: !!referenceType,
        all: (!!referenceTitle && referenceTitle !== '') && (!!authorName && authorName !== '') && !!year && (!!referenceType && referenceType)
    }

    const save = async () => {
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const reference: CreateReference = {
            title: referenceTitle!,
            authorName: authorName!,
            year: year!,
            referenceTypeId: referenceType!
        }
        
        return saveReference(reference) 
    }

    if (!visible) return null

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Título
            </label>
            <Input value={referenceTitle} onChange={onChangeTitle} status={!isValid.title && validate ? 'error' : ''} />
            <label className='input-label col1'>
                Autores
            </label>
            <Input value={authorName} onChange={onChangeAuthor} status={!isValid.author && validate ? 'error' : ''} />
            <label className='input-label col1'>
                Ano de Publicação
            </label>
            <InputNumber value={year} onChange={onChangeYear} status={!isValid.year && validate ? 'error' : ''} />
            <label className='input-label col1'>
                Tipo de Referência
            </label>
            <Select 
                allowClear 
                value={referenceType} 
                options={referenceTypes?.map(d => { return { value: d.id, label: d.typeName }})} 
                onChange={setReferenceType}
                status={!isValid.referenceType && validate ? 'error' : ''} 
            />
            <SaveButton className='save-reference' saveFunction={save} entity='Referência' success={setShouldReset} />
        </div>
    )
}

export default ReferenceForm
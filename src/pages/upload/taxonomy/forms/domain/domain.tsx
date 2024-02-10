import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import './domain.css'
import '../../../../../styles/styles.css'
import SaveButton from '../../../../../components/savingNotification'
import { saveDomain } from '../../../../../api/upload/taxonomy/domain'
import { CreateDomain } from '../../../../../dataModels/taxonomy/domain'
import { StepProps } from '../../taxonomyTree/steps'

function Domain({ visible = true }: StepProps) {
    const [domainName, setDomainName] = useState<string>('')
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        if (shouldReset) reset()
    }, [shouldReset])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDomainName(e.currentTarget.value)
    }

    const save = async () => {
        if (!isValid) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }
        const domain: CreateDomain = {
            Name: domainName
        }
        return saveDomain(domain)
    }

    const reset = () => {
        setDomainName('')
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = (!!domainName && domainName !== '')

    if (!visible) return null

    return (
        <div className='domain-form'>
            <label className='entity-name'> Domínio </label>
            <label className='input-label'>
                Nome
                <Input className='domain-name' value={domainName} onChange={onChange} status={!isValid && validate ? 'error' : ''} />
            </label>
            <SaveButton saveFunction={save} entity='Domínio' success={setShouldReset} />
        </div> 
    )
}

export default Domain
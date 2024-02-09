import { Input, Select, message } from 'antd'
import React, { useEffect, useState } from 'react'
import SaveButton from '../../../../../components/savingNotification'
import { getDomains } from '../../../../../api/upload/taxonomy/domain'
import Domain from '../../../../../dataModels/taxonomy/domain'
import { saveKingdom } from '../../../../../api/upload/taxonomy/kingdom'
import { CreateKingdom } from '../../../../../dataModels/taxonomy/kingdom'
import './kingdom.css'
import '../../../../../styles/styles.css'

function Kingdom() {
    const [domains, setDomains] = useState<Domain[]>()
    const [kingdomName, setKingdomName] = useState<string>('')
    const [domainId, setDomainId] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        if (shouldReset) reset()
    }, [shouldReset])

    useEffect(() => {
        getDomains().then(d => {
            if (d.success) setDomains(d.data)
            else {
                message.error('Falha em buscar Domínios.')
            }
        })
    }, [])

    const onKingdomNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKingdomName(e.currentTarget.value)
    }

    const save = async () => {
        if (!isValid) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const kingdom: CreateKingdom = {
            Name: kingdomName,
            DomainId: domainId
        }
        
        return saveKingdom(kingdom) 
    }

    const reset = () => {
        setKingdomName('')
        setDomainId(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = (!!kingdomName && kingdomName !== '')

    return (
        <div className='kingdom-form'>
            <label className='entity-name'> Reino </label>
            <div className='form-grid'>
                <label className='input-label'>
                    Nome
                </label>
                <Input value={kingdomName} onChange={onKingdomNameChange} status={!isValid && validate ? 'error' : ''} />
                <div></div>
                <label className='input-label'>
                    Domínio
                </label>
                <Select allowClear value={domainId} options={domains?.map(d => { return { value: d.id, label: d.name }})} onChange={setDomainId} />
                <SaveButton className='save-kingdom' saveFunction={save} entity='Domínio' success={setShouldReset} />
            </div>
        </div>
    )
}

export default Kingdom
import { Input, Select, message } from 'antd'
import React, { useEffect, useState } from 'react'
import SaveButton from '../../../components/savingNotification'
import { saveMunicipality } from '../../../api/landscape/municipality'
import './form.css'
import Uf from '../../../dataModels/landscape/uf'
import { getUfs } from '../../../api/landscape/uf'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function MunicipalityForm({ success }: FormProps) {
    const [ufs, setUfs] = useState<Uf[]>()
    const [name, setName] = useState<string>()
    const [uf, setUf] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        getUfs().then(d => {
            if (d.success) setUfs(d.data)
            else message.error('Falha em buscar UFs')
        })
    }, [])

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
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const municipality = {
            name: name!, 
            ufId: uf!
        }

        return await saveMunicipality(municipality)
    }

    const reset = () => {
        setName(undefined)
        setUf(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        name: (!!name && name !== ''),
        uf: !!uf,
        all: (!!name && name !== '') && !!uf
    }

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Nome
            </label>
            <Input value={name} onChange={onChangeName} status={!isValid.name && validate ? 'error': ''} />
            <label className='input-label col1'>
                UF
            </label>
            <Select 
                value={uf} 
                options={ufs?.map(c => { return { label: c.name, value: c.id }})} 
                onChange={setUf}
                status={!isValid.uf && validate ? 'error': ''}
            />
            <SaveButton className='save-municipality' saveFunction={save} entity='Município' success={setShouldReset} />
        </div>
    )
}

export default MunicipalityForm
import React, { useEffect, useState } from 'react'
import Country from '../../../dataModels/landscape/country'
import { getCountries } from '../../../api/landscape/country'
import { Input, Select, message } from 'antd'
import SaveButton from '../../../components/savingNotification'
import { saveUser } from '../../../api/user/user'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function UserForm({ success }: FormProps) {
    const [countries, setCountries] = useState<Country[]>()
    const [name, setName] = useState<string>()
    const [country, setCountry] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        getCountries().then(d => {
            if (d.success) setCountries(d.data)
            else message.error('Falha ao buscar países')
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

        const user = {
            fullName: name,
            countryId: country
        }

        return await saveUser(user)
    }

    const isValid = {
        name: (!!name && name !== ''),
        country: !!country,
        all: (!!name && name !== '') && !!country
    }

    const reset = () => {
        setName(undefined)
        setCountry(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Nome Completo
            </label>
            <Input value={name} onChange={onChangeName} status={!isValid.name && validate ? 'error': ''} />
            <label className='input-label col1'>
                País
            </label>
            <Select 
                value={country} 
                options={countries?.map(c => { return { label: c.name, value: c.id }})}
                onChange={setCountry} 
                status={!isValid.country && validate ? 'error': ''}
            />
            <SaveButton className='save-country' saveFunction={save} entity='País' success={setShouldReset} />
        </div>
    )
}

export default UserForm
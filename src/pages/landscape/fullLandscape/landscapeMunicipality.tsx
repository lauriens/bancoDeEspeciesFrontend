import React, { useEffect, useState } from 'react'
import Municipality from '../../../dataModels/landscape/municipality'
import { StepProps } from './steps'
import { getMunicipalities } from '../../../api/landscape/municipality'
import { Select, message } from 'antd'
import { saveLandscapeMunicipality } from '../../../api/landscape/landscapeMunicipality'
import SaveButton from '../../../components/savingNotification'

function LandscapeMunicipality({ visible, landscapeId }: StepProps) {
    const [municipalitys, setMunicipalities] = useState<Municipality[]>()
    const [municipality, setMunicipality] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        if (visible) {
            getMunicipalities().then(d => {
                if (d.success) setMunicipalities(d.data)
                else message.error('Falha ao buscar municípios')
            })
        }
    }, [visible])

    useEffect(() => {
        if (shouldReset) reset()
    }, [shouldReset])

    const save = async () => {
        if (!isValid.landscapeId) {
            return {
                success: false,
                error: 'Selecione uma paisagem.'
            }
        }
        if (!isValid.all) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios..'
            }
        }

        const municipalityLandscape = {
            landscapeId,
            municipalityId: municipality
        }

        return await saveLandscapeMunicipality(municipalityLandscape)
    }

    const reset = () => {
        setMunicipality(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        landscapeId: !!landscapeId,
        municipalityId: !!municipality,
        all: !!landscapeId && !!municipality
    }

    if (!visible) return null

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Município
            </label>
            <Select 
                value={municipality} 
                options={municipalitys?.map(a => { return { label: a.name, value: a.id }})} 
                onChange={setMunicipality}
                status={!isValid.municipalityId && validate ? 'error' : ''}
            />
            <SaveButton className='save-landscape-municipality' saveFunction={save} entity='Paisagem - Município' success={setShouldReset} />
        </div>
    )
}

export default LandscapeMunicipality
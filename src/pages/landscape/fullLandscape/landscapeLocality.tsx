import React, { useEffect, useState } from 'react'
import LocalityPage from '../locality/locality'
import { StepProps } from './steps'
import SaveButton from '../../../components/savingNotification'
import { saveLandscapeLocality } from '../../../api/landscape/landscapeLocality'
import './landscapeLocality.css'

function LandscapeLocality({ visible, landscapeId }: StepProps) {
    const [localityId, setLocalityId] = useState<number>()
    const [shouldReset, setShouldReset] = useState(false)

    const isValid = {
        landscapeId: !!landscapeId,
        localityId: !!localityId
    }

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

        if (!isValid.localityId) {
            return {
                success: false,
                error: 'Selecione uma localidade.'
            }
        }

        const landscapeLocality = {
            landscapeId: landscapeId!,
            localityId: localityId!
        }

        return saveLandscapeLocality(landscapeLocality)
    }

    const reset = () => {
        setLocalityId(undefined)
        setShouldReset(false)
    }

    if (!visible) return null

    return (    
        <div className='landscape-locality'>
            <LocalityPage localityId={localityId} setLocalityId={setLocalityId} />
            <label className='save-label'>
                Salvar Localidade - Paisagem
                <SaveButton saveFunction={save} entity='Paisagem - Localidade' success={setShouldReset} />
            </label>
        </div>
    )
}

export default LandscapeLocality
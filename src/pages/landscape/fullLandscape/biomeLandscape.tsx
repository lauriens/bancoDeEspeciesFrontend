import React, { useEffect, useState } from 'react'
import { StepProps } from './steps';
import Biome from '../../../dataModels/landscape/biome';
import { Select, message } from 'antd';
import { getBiomes } from '../../../api/landscape/biome';
import SaveButton from '../../../components/savingNotification';
import { saveBiomeLandscape } from '../../../api/landscape/biomeLandscape';

function BiomeLandscape({ visible, landscapeId }: StepProps) {
    const [biomes, setBiomes] = useState<Biome[]>()
    const [biome, setBiome] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        if (visible) {
            getBiomes().then(d => {
                if (d.success) setBiomes(d.data)
                else message.error('Falha ao buscar tipos de área')
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

        const biomeLandscape = {
            landscapeId: landscapeId!,
            biomeId: biome!
        }

        return await saveBiomeLandscape(biomeLandscape)
    }

    const reset = () => {
        setBiome(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = {
        landscapeId: !!landscapeId,
        biomeId: !!biome,
        all: !!landscapeId && !!biome
    }

    if (!visible) return null

    return (
        <div className='form-grid'>
            <label className='input-label col1'>
                Bioma
            </label>
            <Select 
                value={biome} 
                options={biomes?.map(a => { return { label: a.name, value: a.id }})} 
                onChange={setBiome}
                status={!isValid.biomeId && validate ? 'error' : ''}
            />
            <SaveButton className='save-landscape-biome' saveFunction={save} entity='Paisagem - Bioma' success={setShouldReset} />
        </div>
    )
}

export default BiomeLandscape
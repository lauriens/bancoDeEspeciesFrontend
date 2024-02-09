import { Input, Select, message } from 'antd'
import React, { useEffect, useState } from 'react'
import SaveButton from '../../../../../components/savingNotification'
import Taxonomy, { CreateTaxonomy } from '../../../../../dataModels/taxonomy/taxonomy'
import './taxonomyEntity.css'
import '../../../../../styles/styles.css'
import GetResponse from '../../../../../dataModels/getResponse'
import SaveResponse from '../../../../../dataModels/saveResponse'

type TaxonomyEntityProps = {
    entityName: string
    relationshipName: string
    getRelationshipData: () => Promise<GetResponse<Taxonomy[]>>
    saveTaxonomyEntity: (entity: CreateTaxonomy) => Promise<SaveResponse>
}

function TaxonomyEntity({ entityName, relationshipName, getRelationshipData, saveTaxonomyEntity }: TaxonomyEntityProps) {
    const [relationship, setRelationships] = useState<Taxonomy[]>()
    const [taxonomyEntityName, setTaxonomyEntityName] = useState<string>('')
    const [relationshipId, setRelationshipId] = useState<number>()
    const [validate, setValidate] = useState(false)
    const [shouldReset, setShouldReset] = useState(false)

    useEffect(() => {
        if (shouldReset) reset()
    }, [shouldReset])

    useEffect(() => {
        getRelationshipData().then(d => {
            if (d.success) setRelationships(d.data)
            else {
                message.error(`Falha em buscar ${relationshipName}.`)
            }
        })
    }, [])

    const onTaxonomyEntityNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaxonomyEntityName(e.currentTarget.value)
    }

    const save = async () => {
        if (!isValid) {
            setValidate(true)
            return {
                success: false,
                error: 'Preencha todos os campos obrigatórios.'
            }
        }

        const taxonomyEntity: CreateTaxonomy = {
            name: taxonomyEntityName,
            relationshipId: relationshipId
        }
        
        return saveTaxonomyEntity(taxonomyEntity) 
    }

    const reset = () => {
        setTaxonomyEntityName('')
        setRelationshipId(undefined)
        setValidate(false)
        setShouldReset(false)
    }

    const isValid = (!!taxonomyEntityName && taxonomyEntityName !== '')

    return (
        <div className='taxonomy-form'>
            <label className='entity-name'> {entityName} </label>
            <div className='form-grid'>
                <label className='input-label'>
                    Nome
                </label>
                <Input value={taxonomyEntityName} onChange={onTaxonomyEntityNameChange} status={!isValid && validate ? 'error' : ''} />
                <div></div>
                <label className='input-label'>
                    {relationshipName}
                </label>
                <Select allowClear value={relationshipId} options={relationship?.map(d => { return { value: d.id, label: d.name }})} onChange={setRelationshipId} />
                <SaveButton className='save-taxonomy' saveFunction={save} entity={entityName} success={setShouldReset} />
            </div>
        </div>
    )
}

export default TaxonomyEntity
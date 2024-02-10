import React from 'react'
import { getDomains } from '../../../../../api/upload/taxonomy/domain'
import { saveKingdom } from '../../../../../api/upload/taxonomy/kingdom'
import Taxonomy from '../taxonomyEntity/taxonomyEntity'
import { StepProps } from '../../taxonomyTree/steps'

function Kingdom({ visible = true }: StepProps) {
    if (!visible) return null
    
    return (
        <Taxonomy entityName='Reino' relationshipName='Domínio' getRelationshipData={getDomains} saveTaxonomyEntity={saveKingdom} />
    )
}

export default Kingdom
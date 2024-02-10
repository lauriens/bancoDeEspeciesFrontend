import React from 'react'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { getPhyla } from '../../../../../api/upload/taxonomy/phylum'
import { saveClass } from '../../../../../api/upload/taxonomy/class'
import { StepProps } from '../../taxonomyTree/steps'

function Class({ visible = true }: StepProps) {
    if (!visible) return null
    
    return (
        <TaxonomyEntity entityName='Classe' relationshipName='Filo' getRelationshipData={getPhyla} saveTaxonomyEntity={saveClass} />
    )
}

export default Class
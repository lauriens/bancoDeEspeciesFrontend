import React from 'react'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { getPhyla } from '../../../../api/taxonomy/phylum'
import { saveClass } from '../../../../api/taxonomy/class'
import { StepProps } from '../../taxonomyTree/steps'

function Class({ visible = true }: StepProps) {
    if (!visible) return null
    
    return (
        <TaxonomyEntity entityName='Classe' relationshipName='Filo' getRelationshipData={getPhyla} saveTaxonomyEntity={saveClass} />
    )
}

export default Class
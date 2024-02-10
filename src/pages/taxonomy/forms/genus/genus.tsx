import React from 'react'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { getFamilies } from '../../../../api/taxonomy/family'
import { saveGenus } from '../../../../api/taxonomy/genus'
import { StepProps } from '../../taxonomyTree/steps'

function Genus({ visible = true }: StepProps) {
    if (!visible) return null
    
    return (
        <TaxonomyEntity entityName='Gênero' relationshipName='Família' getRelationshipData={getFamilies} saveTaxonomyEntity={saveGenus} />
    )
}

export default Genus
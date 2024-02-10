import React from 'react'
import { savePhylum } from '../../../../api/taxonomy/phylum'
import { getKingdoms } from '../../../../api/taxonomy/kingdom'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { StepProps } from '../../taxonomyTree/steps'

function Phylum({ visible = true }: StepProps) {
    if (!visible) return null
    
    return (
        <TaxonomyEntity entityName='Filo' relationshipName='Reino' getRelationshipData={getKingdoms} saveTaxonomyEntity={savePhylum} />
    )
}

export default Phylum
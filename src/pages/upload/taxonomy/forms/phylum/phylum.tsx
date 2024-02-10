import React from 'react'
import { savePhylum } from '../../../../../api/upload/taxonomy/phylum'
import { getKingdoms } from '../../../../../api/upload/taxonomy/kingdom'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { StepProps } from '../../taxonomyTree/steps'

function Phylum({ visible = true }: StepProps) {
    if (!visible) return null
    
    return (
        <TaxonomyEntity entityName='Filo' relationshipName='Reino' getRelationshipData={getKingdoms} saveTaxonomyEntity={savePhylum} />
    )
}

export default Phylum
import React from 'react'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { getGena } from '../../../../../api/upload/taxonomy/genus'
import { saveSpecie } from '../../../../../api/upload/taxonomy/specie'
import { StepProps } from '../../taxonomyTree/steps'

function Specie({ visible = true }: StepProps) {
    if (!visible) return null
    
    return (
        <TaxonomyEntity entityName='Espécie' relationshipName='Gênero' getRelationshipData={getGena} saveTaxonomyEntity={saveSpecie} />
    )
}

export default Specie
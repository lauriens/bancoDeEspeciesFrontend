import React from 'react'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { getGena } from '../../../../api/taxonomy/genus'
import { StepProps } from '../../taxonomyTree/steps'
import { saveCultureSpecie } from '../../../../api/taxonomy/cultureSpecie'

function CultureSpecie({ visible = true }: StepProps) {
    if (!visible) return null
    
    return (
        <TaxonomyEntity entityName='Espécie da Cultura' relationshipName='Gênero' getRelationshipData={getGena} saveTaxonomyEntity={saveCultureSpecie} />
    )
}

export default CultureSpecie
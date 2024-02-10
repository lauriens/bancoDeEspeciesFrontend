import React from 'react'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { getOrders } from '../../../../api/taxonomy/order'
import { saveFamily } from '../../../../api/taxonomy/family'
import { StepProps } from '../../taxonomyTree/steps'

function Family({ visible = true }: StepProps) {
    if (!visible) return null
    
    return (
        <TaxonomyEntity entityName='Família' relationshipName='Ordem' getRelationshipData={getOrders} saveTaxonomyEntity={saveFamily} />
    )
}

export default Family
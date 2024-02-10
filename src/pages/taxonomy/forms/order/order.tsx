import React from 'react'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { getClasses } from '../../../../api/taxonomy/class'
import { saveOrder } from '../../../../api/taxonomy/order'
import { StepProps } from '../../taxonomyTree/steps'

function Order({ visible = true }: StepProps) {
    if (!visible) return null
    
    return (
        <TaxonomyEntity entityName='Ordem' relationshipName='Classe' getRelationshipData={getClasses} saveTaxonomyEntity={saveOrder} />
    )
}

export default Order
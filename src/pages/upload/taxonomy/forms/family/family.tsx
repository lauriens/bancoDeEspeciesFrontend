import React from 'react'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { getOrders } from '../../../../../api/upload/taxonomy/order'
import { saveFamily } from '../../../../../api/upload/taxonomy/family'

function Family() {
    return (
        <TaxonomyEntity entityName='Família' relationshipName='Ordem' getRelationshipData={getOrders} saveTaxonomyEntity={saveFamily} />
    )
}

export default Family
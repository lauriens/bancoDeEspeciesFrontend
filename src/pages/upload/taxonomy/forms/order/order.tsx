import React from 'react'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { getClasses } from '../../../../../api/upload/taxonomy/class'
import { saveOrder } from '../../../../../api/upload/taxonomy/order'

function Order() {
    return (
        <TaxonomyEntity entityName='Ordem' relationshipName='Classe' getRelationshipData={getClasses} saveTaxonomyEntity={saveOrder} />
    )
}

export default Order
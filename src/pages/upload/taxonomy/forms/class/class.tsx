import React from 'react'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'
import { getPhyla } from '../../../../../api/upload/taxonomy/phylum'
import { saveClass } from '../../../../../api/upload/taxonomy/class'

function Class() {
    return (
        <TaxonomyEntity entityName='Classe' relationshipName='Filo' getRelationshipData={getPhyla} saveTaxonomyEntity={saveClass} />
    )
}

export default Class
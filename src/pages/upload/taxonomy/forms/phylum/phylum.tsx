import React from 'react'
import { savePhylum } from '../../../../../api/upload/taxonomy/phylum'
import { getKingdoms } from '../../../../../api/upload/taxonomy/kingdom'
import TaxonomyEntity from '../taxonomyEntity/taxonomyEntity'

function Phylum() {
    return (
        <TaxonomyEntity entityName='Filo' relationshipName='Reino' getRelationshipData={getKingdoms} saveTaxonomyEntity={savePhylum} />
    )
}

export default Phylum
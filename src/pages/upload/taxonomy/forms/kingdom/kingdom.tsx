import React from 'react'
import { getDomains } from '../../../../../api/upload/taxonomy/domain'
import { saveKingdom } from '../../../../../api/upload/taxonomy/kingdom'
import Taxonomy from '../taxonomyEntity/taxonomyEntity'

function Kingdom() {

    return (
        <Taxonomy entityName='Reino' relationshipName='Domínio' getRelationshipData={getDomains} saveTaxonomyEntity={saveKingdom} />
    )
}

export default Kingdom
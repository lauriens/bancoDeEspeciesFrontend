import React from 'react'
import ParameterForm from '../../../components/parameterForm/parameterForm'
import { saveBiome } from '../../../api/landscape/biome'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function BiomeForm({ success }: FormProps) {
    return (
        <ParameterForm success={success} entityName='Antroma' saveFunction={saveBiome} />
    )
}

export default BiomeForm
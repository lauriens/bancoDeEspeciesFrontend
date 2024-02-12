import React from 'react'
import ParameterForm from '../../../components/parameterForm/parameterForm'
import { saveAreaType } from '../../../api/landscape/areaType'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function AreaTypeForm({ success }: FormProps) {
    return (
        <ParameterForm success={success} entityName='Tipo de Área' saveFunction={saveAreaType} />
    )
}

export default AreaTypeForm
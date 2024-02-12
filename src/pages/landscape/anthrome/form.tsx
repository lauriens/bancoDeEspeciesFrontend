import React from 'react'
import ParameterForm from '../../../components/parameterForm/parameterForm'
import { saveAnthrome } from '../../../api/landscape/anthrome'

type FormProps = {
    success: React.Dispatch<React.SetStateAction<boolean>>
}

function AnthromeForm({ success }: FormProps) {
    return (
        <ParameterForm success={success} entityName='Antroma' saveFunction={saveAnthrome} />
    )
}

export default AnthromeForm
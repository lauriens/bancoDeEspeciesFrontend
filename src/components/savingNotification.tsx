import React from 'react'
import SaveResponse from '../dataModels/saveResponse'
import { Button, Spin, notification } from 'antd'
import { ReactSVG } from 'react-svg'
import './savingNotification.css';

export type NotificationProps = {
    saveFunction: () => Promise<SaveResponse>
    entity: string
    success: React.Dispatch<React.SetStateAction<boolean>>
    className?: string
}

function SaveButton({ saveFunction, entity, success, className }: NotificationProps) {
    const [api, contextHolder] = notification.useNotification( { stack: { threshold: 1 } })

    const openNotification = (message: string, description: string, icon: React.ReactNode) => api.open({
        key: `Salvando ${entity}`,
        message: message,
        description: description,
        icon,
    })

    const save = async () => {
        openNotification(
            `Salvando ${entity}`,
            'Carregando...',
            <Spin indicator={ <ReactSVG src='/loading.svg' className='spinner' /> } />
        )
        const response = await saveFunction()
    
        if (response.success) {
            openNotification(
                'Sucesso!',
                `${entity} salvo!`,
                <ReactSVG className='success' src='/success.svg' />
            )
            success(true)
        } else {
            openNotification(
                'Erro!',
                response.error || `Falha ao salvar ${entity}`,
                <ReactSVG className='error' src='/error.svg' />
            )
        }
    }

    return (
        <div className={`save-button ${className}`}>
            {contextHolder}
            <Button onClick={save}>
                Salvar
            </Button>
        </div>
    )
}

export default SaveButton
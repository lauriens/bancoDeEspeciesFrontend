import React, { useEffect, useState } from 'react'
import User from '../../../dataModels/user'
import { getUsers } from '../../../api/user/user'
import { Collapse, List, message } from 'antd'
import UserForm from './form'

function UserPage() {
    const [shouldReload, setShouldReload] = useState(true)
    const [users, setUsers] = useState<User[]>()

    useEffect(() => {
        getUsers().then(d => {
            if (d.success) setUsers(d.data)
            else message.error('Falha ao buscar usuários')
            setShouldReload(false)
        })
    }, [shouldReload])

    return (
        <div className='users'>
            <Collapse
                defaultActiveKey={['1']} 
                items={[
                    { key: '1', label: 'Criar usuário', children: <UserForm success={setShouldReload} /> }
                ]}
            />
            <List
                header={<h1>Usuários</h1>}
                bordered
                dataSource={users}
                renderItem={(item) => <List.Item>{item.fullName + (item.country?.name ? ` - ${item.country.name}` : '')}</List.Item> }
            />
        </div>
    )
}

export default UserPage
import React from 'react'
import { Tabs } from 'antd'
import AddUser from './AddUser'
import ChangeUser from './ChangeUser'

const { TabPane } = Tabs

const User = () => {
	return (
		<Tabs defaultActiveKey='1' centered={true}>
			<TabPane tab='Добавить Пользователя' key='1'>
				<AddUser/>
			</TabPane>
			<TabPane tab='Изменить Пользователей' key='2'>
				<ChangeUser/>
			</TabPane>
		</Tabs>
	)
}

export default User

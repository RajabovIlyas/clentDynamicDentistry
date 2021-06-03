import React from 'react'
import { Tabs } from 'antd'
import AddRole from './AddRole/AddRole'
import ChangeRole from './ChangeRole'

const { TabPane } = Tabs

const Role = () => {
	return (
		<Tabs defaultActiveKey='1' centered={true}>
			<TabPane tab='Добавить Роль' key='1'>
				<AddRole/>
			</TabPane>
			<TabPane tab='Изменить Роль' key='2'>
				<ChangeRole/>
			</TabPane>
		</Tabs>
	)
}

export default Role

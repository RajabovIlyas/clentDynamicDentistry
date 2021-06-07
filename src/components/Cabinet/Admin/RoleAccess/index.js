import React from 'react'
import { Tabs } from 'antd'
import AddRoleAccess from './AddRoleAccess'
import ChangeRoleAccess from './ChangeRoleAccess'

const { TabPane } = Tabs

const RoleAccess = () => {
	return (
		<Tabs defaultActiveKey='1' centered={true}>
			<TabPane tab='Добавить Доступ' key='1'>
				<AddRoleAccess />
			</TabPane>
			<TabPane tab='Управление доступами' key='2'>
				<ChangeRoleAccess />
			</TabPane>
		</Tabs>
	)
}

export default RoleAccess

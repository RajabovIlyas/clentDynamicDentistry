import React from 'react'
import { Tabs } from 'antd'
import AddDirectoryType from './AddDirectory'
import ChangeDirectoryType from './ChangeDirectory'

const { TabPane } = Tabs

const Directory = () => {
	return (
		<Tabs defaultActiveKey='1' centered={true}>
			<TabPane tab='Добавить справочник' key='1'>
				<AddDirectoryType />
			</TabPane>
			<TabPane tab='Управление справочниками' key='2'>
				<ChangeDirectoryType />
			</TabPane>
		</Tabs>
	)
}

export default Directory

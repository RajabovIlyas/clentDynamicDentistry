import React from 'react'
import { Tabs } from 'antd'
import AddDocumentData from './AddDocumentData'
import ShowDocumentData from './ShowDocumentData'

const { TabPane } = Tabs

const DocumentData = () => {
	return (
		<Tabs defaultActiveKey='1' centered={true}>
			<TabPane tab='Добавить документ' key='1'>
				<AddDocumentData />
			</TabPane>
			<TabPane tab='Просмотр документов' key='2'>
				{/* <ShowDocumentData /> */}
			</TabPane>
		</Tabs>
	)
}

export default DocumentData

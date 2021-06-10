import React from 'react'
import { Tabs } from 'antd'
import AddDocumentType from './AddDocumentType'
import ChangeDocumentType from './ChangeDocumentType'

const { TabPane } = Tabs

const DocumentType = () => {
	return (
		<Tabs defaultActiveKey='1' centered={true}>
			<TabPane tab='Добавить Тип документа' key='1'>
				<AddDocumentType />
			</TabPane>
			<TabPane tab='Управление типами документов' key='2'>
				<ChangeDocumentType />
			</TabPane>
		</Tabs>
	)
}

export default DocumentType

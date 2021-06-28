import React from 'react'
import { Tabs } from 'antd'
import AddDocumentData from './AddDocumentData'
import ShowDocumentData from './ShowDocumentData'
import {useParams} from "react-router-dom";

const { TabPane } = Tabs

const DocumentData = (props) => {
	const {id}=useParams();
	return (
		<Tabs defaultActiveKey='1' centered={true}>
			<TabPane tab='Добавить Данные' key='1'>
				<AddDocumentData id={id}/>
			</TabPane>
			<TabPane tab='Просмотр Данных' key='2'>
				<ShowDocumentData id={id}/>
			</TabPane>
		</Tabs>
	)
}

export default DocumentData

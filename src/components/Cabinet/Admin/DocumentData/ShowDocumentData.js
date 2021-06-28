import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Descriptions, Collapse, Form, Input, Button, Space } from 'antd'
import {
	changeDocumentTypeThunk,
	deleteDocumentTypeThunk,
	getDocumentTypeThunk,
} from '../../../../store/DocumentType/action'

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import FormDocumentType from './FormDocumentType'
import { getDocumentDataThunk } from '../../../../store/DocumentData/action'
import User from '../User'

const { Panel } = Collapse

const ShowDocumentData = ({id}) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getDocumentDataThunk({id}))
	}, [id])
	const documents = useSelector((state) => state.DocumentData.documentsData)
	return (
		<>
			<Collapse>
				{documents.map((value) => (
					<Panel
						header={`Документ: ${value.name}`}
						key={value._id}
					>
						<Descriptions title={'Документ: ' + value.name}>
							{value.data.map((value1) => (
								<Descriptions.Item label={value1.name}>
									{value1.value}
								</Descriptions.Item>
							))}
						</Descriptions>
						{value.dataDirectory.map((value1) => (
							<Descriptions title={'Справочник: ' + value1.nameDirectory}>
								{value1.data.map((value2) => (
									<Descriptions.Item label={value2.name}>
										{value2.value}
									</Descriptions.Item>
								))}
							</Descriptions>
						))}
					</Panel>
				))}
			</Collapse>
		</>
	)
}

export default ShowDocumentData

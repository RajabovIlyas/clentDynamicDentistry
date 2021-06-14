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

const { Panel } = Collapse

const ChangeDocumentType = () => {
	const dispatch = useDispatch()
	const documentsType = useSelector((state) => state.DocumentType.documentsType)

	useEffect(() => {
		dispatch(getDocumentTypeThunk())
	}, [])

	const onSubmit = (data) => {
		dispatch(changeDocumentTypeThunk(data))
	}
	return (
		<div>
			{documentsType.map((role) => (
				<div
					key={role._id}
					style={{
						margin: '20px',
						padding: '10px',
						border: ' 1px solid gray',
					}}
				>
					<Descriptions
						extra={
							<Button
								type={'primary'}
								onClick={() =>
									dispatch(deleteDocumentTypeThunk({ id: role._id }))
								}
								danger
							>
								Удалить
							</Button>
						}
						title={'Название типа документа: ' + role.name}
					>
						<Descriptions.Item label={'Ключевое название '}>
							{role.keyName}
						</Descriptions.Item>
						{role.fields.map((value) => (
							<Descriptions.Item label={'Поле '+ value.name}>
								{value.type}
							</Descriptions.Item>
						))}
					</Descriptions>
					<Collapse>
						<Panel header='Изменить данные' key='1'>
							<Form
								onFinish={(data) => onSubmit({ id: role._id, ...data })}
								name={'changeDocumentType ' + role._id}
								initialValues={{
									...role,
								}}
								layout='vertical'
							>
								<FormDocumentType />
							</Form>
						</Panel>
					</Collapse>
				</div>
			))}
		</div>
	)
}

export default ChangeDocumentType

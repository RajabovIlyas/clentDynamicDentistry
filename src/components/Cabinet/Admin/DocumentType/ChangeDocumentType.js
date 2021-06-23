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
			{documentsType.map((document) => (
				<div
					key={document._id}
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
									dispatch(deleteDocumentTypeThunk({ id: document._id }))
								}
								danger
							>
								Удалить
							</Button>
						}
						title={'Название типа документа: ' + document.name}
					>
						{document.fields.map((value) => (
							<Descriptions.Item label={'Поле '+ value.name}>
								{value.type}
							</Descriptions.Item>
						))}
						{document.legacy.map(value=>
							<Descriptions.Item label={'Поля из справочника '+value.directory.name}>
							{value.directory.fields.map((value1) => 
								value1.name+': '+value1.type+', '
								)}
							</Descriptions.Item>
						)}
					</Descriptions>
					<Collapse>
						<Panel header='Изменить данные' key='1'>
							<Form
								onFinish={(data) => onSubmit({ id: document._id, ...data })}
								name={'changeDocumentType ' + document._id}
								initialValues={{
								...document,
								legacy:document.legacy.map(value=>{return {directory:value.directory._id, name:value.name}}),
								}}
								layout='vertical'
							>
								<FormDocumentType />
								<Form.Item>
				<Button type='primary' htmlType='submit'>
					Сохранить
				</Button>
			</Form.Item>
							</Form>
						</Panel>
					</Collapse>
				</div>
			))}
		</div>
	)
}

export default ChangeDocumentType

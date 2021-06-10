import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Descriptions, Collapse, Form, Input, Button, Space } from 'antd'
import {
	changeDocumentTypeThunk,
	deleteDocumentTypeThunk,
	getDocumentTypeThunk,
} from '../../../../store/DocumentType/action'

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

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
						<Descriptions.Item label={'Поля'}>
							{role.fields.map((value) => value + ', ')}
						</Descriptions.Item>
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
								<Form.Item
									label='Наименование документа'
									name='name'
									rules={[
										{
											required: true,
											message: 'Введите данные!',
										},
									]}
								>
									<Input />
								</Form.Item>
								<Form.Item
									label='Ключ доступа на аглийском языке к документу'
									name='keyName'
									rules={[
										{
											required: true,
											message: 'Введите данные!',
										},
										{
											transform: (value) => {
												let regexp = /[\w]+$/i
												return regexp.test(value) ? value : false
											},
											message: 'Разрешены только латинские символы!',
										},
									]}
								>
									<Input />
								</Form.Item>
								<Form.List name='fields'>
									{(fields, { add, remove }) => (
										<>
											{fields.map(({ key, name, fieldKey, ...restField }) => (
												<Space
													key={key}
													style={{ display: 'flex', marginBottom: 8 }}
													align='baseline'
												>
													<Form.Item
														{...restField}
														name={[name]}
														fieldKey={[fieldKey]}
														rules={[
															{ required: true, message: 'Заполните значение' },
														]}
													>
														<Input placeholder='Поле' />
													</Form.Item>

													<MinusCircleOutlined onClick={() => remove(name)} />
												</Space>
											))}
											<Form.Item>
												<Button
													type='dashed'
													onClick={() => add()}
													block
													icon={<PlusOutlined />}
												>
													Добавить поле
												</Button>
											</Form.Item>
										</>
									)}
								</Form.List>
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

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Form, Input, Space, Select, DatePicker, Divider } from 'antd'
import { addDocumentDataThunk } from '../../../../store/DocumentData/action'

const inputByType = (type) => {
	switch (type) {
		case 'STRING':
			return <Input placeholder='Заполните поле' />
		case 'DATE':
			return <DatePicker placeholder='Выберите дату' />
		case 'NUMBER':
			return <Input type='number' placeholder='Заполните поле' />
		default:
			return <Input placeholder='Название поля' />
	}
}

const { Option } = Select

const FormDocumentData = (props) => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.Auth)
	const onSubmit = (data) => {
		dispatch(
			addDocumentDataThunk({ ...data, name: props.name, user: user._id })
		)
	}

	return (
		<>
			<Form
				onFinish={onSubmit}
				name='addDocumentType'
				layout='vertical'
				initialValues={{
					data: props.fields.map((value) => {
						return { value: '', name: value.name }
					}),
					dataDirectory: props.legacy.map((value) => {
						return {
							directory: value._id,
							nameDirectory: value.name,
							data: value.directory.fields.map((value1) => {
								return { value: '', name: value1.name }
							}),
						}
					}),
				}}
			>
				<Form.Item name={'user'}></Form.Item>
				<Form.List name='data'>
					{(fields, { add, remove }) => (
						<>
							{fields.map(({ key, name, fieldKey, ...restField }) => (
								<Space
									key={key}
									style={{ display: 'flex', marginBottom: 8 }}
									align='baseline'
								>
									<Form.Item
										label={props.fields[key].name}
										{...restField}
										name={[name, 'value']}
										fieldKey={[fieldKey, 'value']}
										rules={[{ required: true, message: 'Заполните значение' }]}
									>
										{inputByType(props.fields[key].type)}
									</Form.Item>
								</Space>
							))}
						</>
					)}
				</Form.List>
				<Form.List name='dataDirectory'>
					{(fields, { add, remove }) => (
						<>
							{fields.map((value) => (
								<Form.List name={[value.name, 'data']}>
									{(fields, { add, remove }) => (
										<div>
											<Divider>
												Справочник {props.legacy[value.key].name}
											</Divider>
											{fields.map(({ key, name, fieldKey, ...restField }) => (
												<Space
													key={key}
													style={{ display: 'flex', marginBottom: 8 }}
													align='baseline'
												>
													<Form.Item
														label={
															props.legacy[value.key].directory.fields[key].name
														}
														{...restField}
														name={[name, 'value']}
														fieldKey={[fieldKey, 'value']}
														rules={[
															{ required: true, message: 'Заполните значение' },
														]}
													>
														{inputByType(
															props.legacy[value.key].directory.fields[key].type
														)}
													</Form.Item>
												</Space>
											))}
										</div>
									)}
								</Form.List>
							))}
						</>
					)}
				</Form.List>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Добавить
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

export default FormDocumentData

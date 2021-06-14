import React from 'react'
import { useDispatch } from 'react-redux'

import { Button, Form, Input, Space, Select } from 'antd'

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { getTypeFieldThunk } from '../../../../store/DocumentType/action'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const { Option } = Select

const FormDocumentType = () => {
	const dispatch = useDispatch()
	const types = useSelector((state) => state.DocumentType.types)
	useEffect(() => {
		dispatch(getTypeFieldThunk())
	}, [])
	return (
		<>
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
									name={[name, 'name']}
									fieldKey={[fieldKey, 'name']}
									rules={[{ required: true, message: 'Заполните значение' }]}
								>
									<Input placeholder='Название поля' />
								</Form.Item>
								<Form.Item
									{...restField}
									name={[name, 'type']}
									fieldKey={[fieldKey, 'type']}
									rules={[{ required: true, message: 'Выберите тип' }]}
								>
									<Select style={{ width: 120 }}>
										{types.map((data) => (
											<Option value={data.value}>{data.name}</Option>
										))}
									</Select>
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
					Добавить
				</Button>
			</Form.Item>
		</>
	)
}

export default FormDocumentType

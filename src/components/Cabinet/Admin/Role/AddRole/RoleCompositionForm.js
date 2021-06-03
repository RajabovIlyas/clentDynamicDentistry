import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

import { Button, Form, Input, Space } from 'antd'

const RoleDocumentForm = ({ field }) => {
	return (
		<div
			style={{
				padding: '20px',
				border: ' 1px solid black',
			}}
		>
			<Form.List
				{...field}
				label='Доступ'
				name={[field.name, 'document']}
				fieldKey={[field.fieldKey, 'document']}
				rules={[
					{
						validator: async (_, names) => {
							if (!names || names.length < 1) {
								return Promise.reject(new Error('Должно быть минимум 1'))
							}
						},
					},
				]}
			>
				{(fields, { add, remove }, { errors }) => (
					<>
						{fields.map((field, index) => (
							<Form.Item key={field.key + index} required={true} label='Доступ'>
								<Form.Item
									{...field}
                                    label='Доступ'
									rules={[
										{
											required: true,
											whitespace: true,
											message: 'Заполните данную ячейку!',
										},
									]}
									noStyle
								>
									<Input
										placeholder='Введите данные'
										style={{ width: '60%' }}
									/>
								</Form.Item>
								{fields.length > 1 ? (
									<MinusCircleOutlined
										className='dynamic-delete-button'
										onClick={() => remove(field.name)}
									/>
								) : null}
							</Form.Item>
						))}
						<Form.Item>
							<Button
								type='dashed'
								onClick={() => add()}
								style={{ width: '60%' }}
								icon={<PlusOutlined />}
							>
								Add field
							</Button>
							<Form.ErrorList errors={errors} />
						</Form.Item>
					</>
				)}
			</Form.List>
		</div>
	)
}

const RoleCompositionForm = (props) => {
	return (
		<Form.List
			name='roleComposition'
			rules={[
				{
					validator: async (_, names) => {
						if (!names || names.length < 1) {
							return Promise.reject(
								new Error('Должен быть хоть 1 вид подраздела')
							)
						}
					},
				},
			]}
		>
			{(fields, { add, remove }, { errors }) => (
				<div>
					{fields.map((field) => (
						<Space
							key={field.key}
							direction='vertical'
							style={{
								width: '95%',
								margin: '20px',
								border: ' 1px solid black',
							}}
						>
							<RoleDocumentForm field={field} />
							<Form.Item
								{...field}
								label='Роль'
								name={[field.name, 'name']}
								fieldKey={[field.fieldKey, 'name']}
								rules={[
									{
										required: true,
										message: 'Введите данные!',
									},
								]}
							>
								<Input />
							</Form.Item>
							<MinusCircleOutlined
								className='dynamic-delete-button'
								onClick={() => remove(field.name)}
							/>
						</Space>
					))}
					<Form.Item>
						<Button type='dashed' onClick={() => add()} icon={<PlusOutlined />}>
							Добавить подраздел
						</Button>
						<Form.ErrorList errors={errors} />
					</Form.Item>
				</div>
			)}
		</Form.List>
	)
}

export default RoleCompositionForm

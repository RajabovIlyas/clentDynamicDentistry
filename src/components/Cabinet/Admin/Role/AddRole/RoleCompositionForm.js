import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

import { Button, Form, Input, Space, Checkbox } from 'antd'
import { useSelector } from 'react-redux'


const RoleCompositionForm = (props) => {
	const rolesAccess=useSelector(state=>state.RoleAccess.rolesAccess);
	const options=[];
    rolesAccess.forEach(value => {
        options.push({value:value._id,label:value.name})
    })
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
						<Form.Item name={[field.name, "roleaccess"]} fieldKey={[field.fieldKey, 'roleaccess']} label="Доступ"
                       rules={[
                           {
                               required: true,
                               message: 'Выберите хотя бы один вариант!',
                           },
                       ]}>
							<Checkbox.Group options={options}/>
							</Form.Item>
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

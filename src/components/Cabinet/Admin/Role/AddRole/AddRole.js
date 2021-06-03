import React from 'react'
import { useDispatch } from 'react-redux'
import RoleCompositionForm from './RoleCompositionForm'
import {addRoleThunk} from '../../../../../store/Role/action'

import { Button, Form, Input, Select, Space } from 'antd'

const { Option } = Select

const AddRole = () => {
	const dispatch = useDispatch()
	const [form] = Form.useForm()
	const onSubmit = (data) => {
		dispatch(addRoleThunk(data));
	}
	return (
		<Form
			form={form}
			onFinish={onSubmit}
			name='addRole'
			initialValues={{
				remember: true,
			}}
			layout='vertical'
		>
			<Form.Item
				label='Название раздела'
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
			<RoleCompositionForm/>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Добавить
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddRole

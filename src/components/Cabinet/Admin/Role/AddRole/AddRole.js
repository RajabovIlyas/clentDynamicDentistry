import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RoleCompositionForm from './RoleCompositionForm'
import { addRoleThunk } from '../../../../../store/Role/action'

import { Button, Form, Input, Select, Space } from 'antd'
import { getRoleAccessThunk } from '../../../../../store/RoleAccess/action'

const { Option } = Select

const AddRole = () => {
	const dispatch = useDispatch()
	const [form] = Form.useForm()
	const onSubmit = (data) => {
		dispatch(addRoleThunk(data))
	}
	useEffect(() => {
		dispatch(getRoleAccessThunk())
	}, [])
	return (
		<Form form={form} onFinish={onSubmit} name='addRole' layout='vertical'>
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
			<RoleCompositionForm />
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Добавить
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddRole

import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRoleThunk } from '../../../../store/Role/action'

import { Button, Form, Input, Select, Space } from 'antd'
import { addUserThunk } from '../../../../store/User/action'

const { Option } = Select

const AddUser = () => {
	const dispatch = useDispatch()
	const roles = useSelector((state) => state.Role.roles)

	useEffect(() => {
		dispatch(getRoleThunk())
	}, [])

	const [form] = Form.useForm()

	const onSubmit = (data) => {
		dispatch(addUserThunk({...data,role:[{role:data.role}]}))
		form.resetFields();
	}

	return (
		<Form
			form={form}
			onFinish={onSubmit}
			name='addExamination'
			layout='vertical'
		>
			<Form.Item
				label='Имя'
				name='firstName'
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
				label='Фамилия'
				name='lastName'
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
				label='email'
				name='email'
				rules={[
					{
						required: true,
						message: 'Введите данные!',
					},
					{ type: 'email', message: 'Пожалуйста, проверьте ваш email' },
				]}
			>
				<Input type='email' />
			</Form.Item>
			<Form.Item
				label='Пароль'
				name='password'
				rules={[
					{
						required: true,
						message: 'Введите данные!',
					},
					{ min: 6, message: 'Пароль должен состоять минимум из 6 символов' },
				]}
			>
				<Input type='password' />
			</Form.Item>
			<Form.Item
				label='Роль'
				name='role'
				rules={[
					{
						required: true,
						message: 'Введите данные!',
					},
				]}
			>
				<Select showSearch style={{ width: 200 }} placeholder='Выберите роль'>
					{roles.map((role) => (
						<Option key={role._id} value={role._id}>
							{role.name}
						</Option>
					))}
				</Select>
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Добавить
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddUser

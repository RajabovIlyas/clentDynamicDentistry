import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersThunk } from '../../../../store/User/action'

import { Descriptions, Collapse, Form, Select, Button, Input } from 'antd'
import { getRoleThunk } from '../../../../store/Role/action'

const { Panel } = Collapse

const { Option } = Select

const ChangeUser = () => {
	const dispatch = useDispatch()
	const users = useSelector((state) => state.User.users)
	const roles = useSelector((state) => state.Role.roles)

	useEffect(() => {
		dispatch(getRoleThunk())
		dispatch(getUsersThunk())
	}, [])

	const onSubmitChangeRole = (data) => {
		console.log('onSubmitChangeRole', data)
	}

	const onSubmitChangeUser = (data) => {
		console.log('onSubmitChangeUser', data)
	}
	return (
		<div>
			{users.map((user) => (
				<div
					style={{ margin: '20px', padding: '10px', border: ' 1px solid gray' }}
				>
					<Descriptions title={user.firstName + ' ' + user.lastName}>
						<Descriptions.Item label='email'>{user.email}</Descriptions.Item>
						<Descriptions.Item label='Роль'>
							{user?.role[user.role.length - 1]?.role.name}
						</Descriptions.Item>
					</Descriptions>
					<Collapse>
						<Panel header='Изменить роль' key='1'>
							<Form
								initialValues={{
									role: user?.role[user.role.length - 1]?.role._id,
								}}
								onFinish={onSubmitChangeRole}
								name={'changeRole' + user._id}
								layout='vertical'
							>
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
									<Select
										showSearch
										style={{ width: 200 }}
										placeholder='Выберите роль'
									>
										{roles.map((role) => (
											<Option key={role._id} value={role._id}>
												{role.name}
											</Option>
										))}
									</Select>
								</Form.Item>
								<Form.Item>
									<Button type='primary' htmlType='submit'>
										Сохранить
									</Button>
								</Form.Item>
							</Form>
						</Panel>
						<Panel header='Изменить данные' key='2'>
							<Form
								initialValues={{
									...user,
								}}
								onFinish={onSubmitChangeUser}
								name='changeUserData'
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
										{
											type: 'email',
											message: 'Пожалуйста, проверьте ваш email',
										},
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
										{
											min: 6,
											message: 'Пароль должен состоять минимум из 6 символов',
										},
									]}
								>
									<Input type='password' />
								</Form.Item>
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

export default ChangeUser

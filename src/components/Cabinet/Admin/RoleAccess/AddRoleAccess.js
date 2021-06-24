import React from 'react'
import { useDispatch } from 'react-redux'

import { Button, Form, Input} from 'antd'
import { addRoleAccessThunk } from '../../../../store/RoleAccess/action'


const AddRoleAccess = () => {
	const dispatch = useDispatch()
	const [form] = Form.useForm()
	const onSubmit = (data) => {
		dispatch(addRoleAccessThunk(data))
		form.resetFields();
	}
	return (
		<Form form={form} onFinish={onSubmit} name='addRoleAccess' layout='vertical'>
			<Form.Item
				label='Наименование доступа'
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
				label='Ключ доступа на аглийском языке'
				name='keyName'
				rules={[
					{
						required: true,
						message: 'Введите данные!',
					},
					{ transform: (value)=>{
						let regexp = /[\w]+$/i;
						return regexp.test(value)?value:false;
					}, message: 'Разрешены только латинские символы!' },
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Добавить
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddRoleAccess

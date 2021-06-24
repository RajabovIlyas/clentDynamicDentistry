import React from 'react'
import { useDispatch } from 'react-redux'
import { addRoleThunk } from '../../../../store/Role/action'

import { Button, Form } from 'antd'
import FormRole from './FormRole'

const AddRole = () => {
	const dispatch = useDispatch()
	const onSubmit = (data) => {
		dispatch(addRoleThunk(data))
		form.resetFields();
	}
	const [form] = Form.useForm();
	return (
		<Form form={form} onFinish={onSubmit} name='addRole' layout='vertical'>
			<FormRole/>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Добавить
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddRole

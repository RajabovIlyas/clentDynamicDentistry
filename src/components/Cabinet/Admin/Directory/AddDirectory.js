import React from 'react'
import { useDispatch } from 'react-redux'

import { Button, Form, Input, Space, Select } from 'antd'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormDirectory from './FormDirectory'
import { addDirectoryThunk, getTypeFieldThunk } from '../../../../store/Directory/action'

const { Option } = Select

const AddDirectory = () => {
	const dispatch = useDispatch()
	const onSubmit = (data) => {
		dispatch(addDirectoryThunk(data))
		form.resetFields();
	}
	useEffect(() => {
		dispatch(getTypeFieldThunk())
	}, [])
	const [form] = Form.useForm();
	return (
		<Form  form={form} onFinish={onSubmit} name='addDirectory' layout='vertical'>
			<FormDirectory/>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Добавить
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddDirectory

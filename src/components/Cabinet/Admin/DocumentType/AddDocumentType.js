import React from 'react'
import { useDispatch } from 'react-redux'

import { Button, Form, Input, Space, Select } from 'antd'

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import {
	addDocumentTypeThunk,
} from '../../../../store/DocumentType/action'
import {getTypeFieldThunk} from '../../../../store/Directory/action'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormDocumentType from './FormDocumentType'

const { Option } = Select

const AddDocumentType = () => {
	const dispatch = useDispatch()
	const types = useSelector((state) => state.DocumentType.types)
	const onSubmit = (data) => {
		dispatch(addDocumentTypeThunk(data))
		form.resetFields();
	}
	useEffect(() => {
		dispatch(getTypeFieldThunk())
	}, [])
	const [form] = Form.useForm();
	return (
		<Form form={form} onFinish={onSubmit} name='addDocumentType' layout='vertical'>
			<FormDocumentType/>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Добавить
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AddDocumentType

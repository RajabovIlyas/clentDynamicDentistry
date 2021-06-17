import React from 'react'
import { useDispatch } from 'react-redux'

import { Button, Form, Input, Space, Select } from 'antd'

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import {
	addDocumentTypeThunk,
	getTypeFieldThunk,
} from '../../../../store/DocumentType/action'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormDocumentType from './FormDocumentType'

const { Option } = Select

const AddDocumentType = () => {
	const dispatch = useDispatch()
	const types = useSelector((state) => state.DocumentType.types)
	const onSubmit = (data) => {
		dispatch(addDocumentTypeThunk(data))
	}
	useEffect(() => {
		dispatch(getTypeFieldThunk())
	}, [])
	return (
		<Form onFinish={onSubmit} name='addDocumentType' layout='vertical'>
			<FormDocumentType/>
		</Form>
	)
}

export default AddDocumentType

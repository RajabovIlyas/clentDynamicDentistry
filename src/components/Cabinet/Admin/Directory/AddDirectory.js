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
	}
	useEffect(() => {
		dispatch(getTypeFieldThunk())
	}, [])
	return (
		<Form onFinish={onSubmit} name='addDirectory' layout='vertical'>
			<FormDirectory/>
		</Form>
	)
}

export default AddDirectory

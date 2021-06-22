import React, { useEffect } from 'react'

import { Form, Input, Checkbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getRoleAccessThunk } from '../../../../store/RoleAccess/action'

const FormRole = () => {
	const rolesAccess = useSelector((state) => state.RoleAccess.rolesAccess)
	const dispatch = useDispatch()
	const options = []
	rolesAccess.forEach((value) => {
		options.push({ value: value._id, label: value.name })
	})

	useEffect(() => {
		dispatch(getRoleAccessThunk())
	}, [])

	return (
		<>
			<Form.Item
				name={'roleaccess'}
				fieldKey={'roleaccess'}
				label='Доступ'
				rules={[
					{
						required: true,
						message: 'Выберите хотя бы один вариант!',
					},
				]}
			>
				<Checkbox.Group options={options} />
			</Form.Item>
			<Form.Item
				label='Роль'
				name={'name'}
				fieldKey={'name'}
				rules={[
					{
						required: true,
						message: 'Введите данные!',
					},
				]}
			>
				<Input />
			</Form.Item>
		</>
	)
}

export default FormRole

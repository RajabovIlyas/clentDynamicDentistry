import React, { useEffect } from 'react'

import { Form, Input, Checkbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getRoleAccessThunk } from '../../../../store/RoleAccess/action'
import {getDocumentTypeThunk} from "../../../../store/DocumentType/action";

const FormRole = () => {
	const rolesAccess = useSelector((state) => state.RoleAccess.rolesAccess)
	const documentAccess = useSelector((state) => state.DocumentType.documentsType)
	const dispatch = useDispatch()
	const optionsRole = []
	rolesAccess.forEach((value) => {
		optionsRole.push({ value: value._id, label: value.name })
	})
	const optionsDocument=[];
	documentAccess.forEach((value) => {
		optionsDocument.push({ value: value._id, label: value.name })
	})


	useEffect(() => {
		dispatch(getRoleAccessThunk())
		dispatch(getDocumentTypeThunk())
	}, [])

	return (
		<>
			<Form.Item
				name={'roleAccess'}
				fieldKey={'roleAccess'}
				label='Доступ'
				rules={[
					{
						required: true,
						message: 'Выберите хотя бы один вариант!',
					},
				]}
			>
				<Checkbox.Group options={optionsRole} />
			</Form.Item>
			<Form.Item
				name={'documentAccess'}
				fieldKey={'documentAccess'}
				label='Доступ к документам'
				rules={[
					{
						required: true,
						message: 'Выберите хотя бы один вариант!',
					},
				]}
			>
				<Checkbox.Group options={optionsDocument} />
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

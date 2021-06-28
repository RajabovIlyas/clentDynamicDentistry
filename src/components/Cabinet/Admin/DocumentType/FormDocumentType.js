import React from 'react'
import { useDispatch } from 'react-redux'

import { Button, Form, Input, Space, Select } from 'antd'

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { getTypeFieldThunk } from '../../../../store/Directory/action'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getDirectoryThunk } from '../../../../store/Directory/action'

const { Option } = Select


const FormDocumentType = () => {
	const dispatch = useDispatch()
	const types = useSelector((state) => state.Directory.types)
	const directoryes = useSelector((state) => state.Directory.directoryes)
	useEffect(() => {
		dispatch(getTypeFieldThunk())
		dispatch(getDirectoryThunk())
	}, [])

	return (
		<>
			<Form.Item
				label='Наименование документа'
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
			<Form.List name='fields'>
				{(fields, { add, remove }) => (
					<>
						{fields.map(({ key, name, fieldKey, ...restField }) => (
							<Space
								key={key}
								style={{ display: 'flex', marginBottom: 8 }}
								align='baseline'
							>
								<Form.Item
								label='Название поля'
									{...restField}
									name={[name, 'name']}
									fieldKey={[fieldKey, 'name']}
									rules={[{ required: true, message: 'Заполните значение' }]}
								>

									<Input placeholder='Название поля' />
								</Form.Item>
								<Form.Item
								label='Тип'
									{...restField}
									name={[name, 'type']}
									fieldKey={[fieldKey, 'type']}
									rules={[{ required: true, message: 'Выберите тип' }]}
								>
									<Select style={{ width: 120 }}>
										{types.map((data) => (
											<Option value={data.value}>{data.name}</Option>
										))}
									</Select>
								</Form.Item>
								<MinusCircleOutlined onClick={() => remove(name)} />
							</Space>
						))}
						<Form.Item>
							<Button
								type='dashed'
								onClick={() => add()}
								block
								icon={<PlusOutlined />}
							>
								Добавить поле
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>
			<Form.List name='legacy'>
				{(fields, { add, remove }) => (
					<>
						{fields.map(({ key, name, fieldKey, ...restField }) => (
							<Space
								key={key}
								style={{ display: 'flex', marginBottom: 8 }}
								align='baseline'
							>
							<Form.Item
								label='Название поля'
									{...restField}
									name={[name, 'name']}
									fieldKey={[fieldKey, 'name']}
									rules={[{ required: true, message: 'Заполните значение' }]}
								>

									<Input placeholder='Название поля' />
								</Form.Item>
								<Form.Item
								label='Справочник'
									{...restField}
									name={[name,'directory']}
									fieldKey={[fieldKey, 'directory']}
									rules={[{ required: true, message: 'Выберите справочник' }]}
								>
									<Select style={{ width: '300px' }}>
										{directoryes.map((data) => (
											<Option value={data._id}>Название {data.name} (поля: {data.fields.map(value=>value.name+', ')})</Option>
										))}
									</Select>
								</Form.Item>
								<MinusCircleOutlined onClick={() => remove(name)} />
							</Space>
						))}
						<Form.Item>
							<Button
								type='dashed'
								onClick={() => add()}
								block
								icon={<PlusOutlined />}
							>
								Добавить поля другого справочника
							</Button>
						</Form.Item>
					</>
				)}
			</Form.List>
		</>
	)
}

export default FormDocumentType

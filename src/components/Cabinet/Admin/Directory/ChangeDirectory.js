import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Descriptions, Collapse, Form, Input, Button, Space } from 'antd'

import FormDirectory from './FormDirectory'
import { changeDirectoryThunk, getDirectoryThunk, deleteDirectoryThunk } from '../../../../store/Directory/action'

const { Panel } = Collapse

const ChangeDirectory = () => {
	const dispatch = useDispatch()
	const directoryes = useSelector((state) => state.Directory.directoryes)

	useEffect(() => {
		dispatch(getDirectoryThunk())
	}, [])

	const onSubmit = (data) => {
		dispatch(changeDirectoryThunk(data))
	}
	return (
		<div>
			{directoryes.map((directory) => (
				<div
					key={directory._id}
					style={{
						margin: '20px',
						padding: '10px',
						border: ' 1px solid gray',
					}}
				>
					<Descriptions
						extra={
							<Button
								type={'primary'}
								onClick={() =>
									dispatch(deleteDirectoryThunk({ id: directory._id }))
								}
								danger
							>
								Удалить
							</Button>
						}
						title={'Название справочника: ' + directory.name}
					>
						{directory.fields.map((value) => (
							<Descriptions.Item label={'Поле '+ value.name}>
								{value.type}
							</Descriptions.Item>
						))}
						{directory.legacy.map(value=>
							value.fields.map((value1) => (
							<Descriptions.Item label={'Поле '+ value1.name+' (Справочник '+value.name+')'}>
								{value1.type}
							</Descriptions.Item>
						)))}
					</Descriptions>
					<Collapse>
						<Panel header='Изменить данные' key='1'>
							<Form
								onFinish={(data) => onSubmit({ id: directory._id, ...data })}
								name={'changeDirectory ' + directory._id}
								initialValues={{
									...directory,
									legacy: directory.legacy.map(value=>value._id)
								}}
								layout='vertical'
							>
								<FormDirectory />
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

export default ChangeDirectory

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Descriptions, Collapse,Form ,Input, Button} from 'antd'
import { changeRoleAccessThunk, deleteRoleAccessThunk, getRoleAccessThunk } from '../../../../store/RoleAccess/action';

const {Panel} = Collapse;

const ChangeRoleAccess = () => {
	const dispatch = useDispatch()
	const roleAccess = useSelector((state) => state.RoleAccess.rolesAccess)

	useEffect(() => {
		dispatch(getRoleAccessThunk())
	}, [])

	const onSubmit = (data) => {
		dispatch(changeRoleAccessThunk(data));
	}
	return (
		<div>
			{roleAccess.map((role) => (
				<div key={role._id} style={{
							margin: '20px',
							padding: '10px',
							border: ' 1px solid gray',
						}}>
					<Descriptions
						title={'Название раздела: ' + role.name}
					>
							<Descriptions.Item label={'Ключевое название '}>
								{role.keyName}
							</Descriptions.Item>
					</Descriptions>
					<Collapse>
						<Panel header='Изменить данные' key='1'>
						<Form
			onFinish={(data)=>onSubmit({id:role._id,...data})}
			name={'changeRole '+role._id}
			initialValues={{
				...role
			}}
			layout='vertical'
		>
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
				]}
			>
				<Input />
			</Form.Item>
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

export default ChangeRoleAccess

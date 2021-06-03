import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRoleThunk, deleteRoleThunk, changeRoleThunk } from '../../../../store/Role/action'
import { Descriptions, Collapse,Form ,Input, Button} from 'antd'
import RoleCompositionForm from './AddRole/RoleCompositionForm';

const {Panel} = Collapse;

const ChangeRole = () => {
	const dispatch = useDispatch()
	const roles = useSelector((state) => state.Role.roles)

	useEffect(() => {
		dispatch(getRoleThunk())
	}, [])

	const [form] = Form.useForm()
	const onSubmit = (data) => {
		dispatch(changeRoleThunk(data));
	}
	return (
		<div>
			{roles.map((role) => (
				<div style={{
							margin: '20px',
							padding: '10px',
							border: ' 1px solid gray',
						}}>
					<Descriptions
						extra={<Button type={'primary'} onClick={()=>dispatch(deleteRoleThunk({id:role._id}))} danger>Удалить</Button>}
						title={'Название раздела: ' + role.name}
					>
						{role.roleComposition.map((roleCom) => (
							<Descriptions.Item label={'Подраздел ' + roleCom.name}>
								{roleCom.document.map((value) => value + ',')}
							</Descriptions.Item>
						))}
					</Descriptions>
					<Collapse>
						<Panel header='Изменить данные' key='1'>
						<Form
			form={form}
			onFinish={(data)=>onSubmit({id:role._id,...data})}
			name='changeRole'
			initialValues={{
				...role
			}}
			layout='vertical'
		>
			<Form.Item
				label='Название раздела'
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
			<RoleCompositionForm/>
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

export default ChangeRole

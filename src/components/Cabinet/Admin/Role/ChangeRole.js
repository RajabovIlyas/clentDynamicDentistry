import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRoleThunk, deleteRoleThunk, changeRoleThunk } from '../../../../store/Role/action'
import { Descriptions, Collapse,Form ,Input, Button} from 'antd'
import RoleCompositionForm from './AddRole/RoleCompositionForm';
import { getRoleAccessThunk } from '../../../../store/RoleAccess/action';

const {Panel} = Collapse;

const ChangeRole = () => {
	const dispatch = useDispatch()
	const roles = useSelector((state) => state.Role.roles)

	useEffect(() => {
		dispatch(getRoleThunk())
		dispatch(getRoleAccessThunk())
	}, [])

	const onSubmit = (data) => {
		dispatch(changeRoleThunk(data));
	}
	return (
		<div>
			{roles.map((role) => (
				<div key={role._id} style={{
							margin: '20px',
							padding: '10px',
							border: ' 1px solid gray',
						}}>
					<Descriptions
						extra={<Button type={'primary'} onClick={()=>dispatch(deleteRoleThunk({id:role._id}))} danger>Удалить</Button>}
						title={'Название раздела: ' + role.name}
					>
						{role.roleComposition.map((roleCom) => (
							<Descriptions.Item key={roleCom._id} label={'Подраздел ' + roleCom.name}>
								{roleCom.roleaccess.map((value) => value.name + ',')}
							</Descriptions.Item>
						))}
					</Descriptions>
					<Collapse>
						<Panel header='Изменить данные' key='1'>
						{role.roleComposition.forEach((value, index)=>{
							value.roleaccess.forEach((valueRole,indexRole)=>{
								role.roleComposition[index].roleaccess[indexRole]=valueRole._id
							})
						})}
						{console.log('role', role)}
						<Form
			onFinish={(data)=>onSubmit({id:role._id,...data})}
			name={'changeRole '+role._id}
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

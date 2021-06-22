import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRoleThunk, deleteRoleThunk, changeRoleThunk } from '../../../../store/Role/action'
import { Descriptions, Collapse,Form ,Input, Button} from 'antd'
import FormRole from './FormRole';
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
							<Descriptions.Item key={role._id} label={'Подраздел'}>
								{role.roleaccess.map((value) => value.name + ',')}
							</Descriptions.Item>
					</Descriptions>
					<Collapse>
						<Panel header='Изменить данные' key='1'>
						{
							role.roleaccess.forEach((valueRole,indexRole)=>{
								role.roleaccess[indexRole]=valueRole._id
							})
						}
						{console.log('role', role)}
						<Form
			onFinish={(data)=>onSubmit({id:role._id,...data})}
			name={'changeRole '+role._id}
			initialValues={{
				...role
			}}
			layout='vertical'
		>
			<FormRole/>
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

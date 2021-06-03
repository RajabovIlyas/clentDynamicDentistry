import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRoleThunk } from '../../../../store/Role/action'
import { Descriptions } from 'antd'

const ChangeRole = () => {
	const dispatch = useDispatch()
	const roles = useSelector((state) => state.Role.roles)

	useEffect(() => {
		dispatch(getRoleThunk())
	}, [])
	return (
		<div>
			{roles.map((role) => (
				<Descriptions
					style={{ margin: '20px', padding: '10px', border: ' 1px solid gray' }}
					title={'Название раздела: ' + role.name}
				>
					{role.roleComposition.map((roleCom) => (
						<Descriptions.Item label={'Подраздел ' + roleCom.name}>
							{roleCom.document.map((value) => value + ',')}
						</Descriptions.Item>
					))}
				</Descriptions>
			))}
		</div>
	)
}

export default ChangeRole

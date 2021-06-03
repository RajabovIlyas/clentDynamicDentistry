import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersThunk } from '../../../../store/User/action'

import { Descriptions } from 'antd'

const ChangeUser = () => {
	const dispatch = useDispatch()
	const users = useSelector((state) => state.User.users)

	useEffect(() => {
		dispatch(getUsersThunk())
	}, [])
	return (
		<div>
			{users.map((user) => (
				<Descriptions
					style={{ margin: '20px', padding: '10px', border: ' 1px solid gray' }}
					title={user.firstName + ' ' + user.lastName}
				>
					<Descriptions.Item label='email'>{user.email}</Descriptions.Item>
					<Descriptions.Item label='role'>
						{user.role[user.role.length - 1].role}
					</Descriptions.Item>
				</Descriptions>
			))}
		</div>
	)
}

export default ChangeUser

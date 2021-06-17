/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {
	SettingOutlined,
	UserAddOutlined,
	EditOutlined,
} from '@ant-design/icons'
import { FaUserEdit } from 'react-icons/fa'
import Setting from './Setting/Setting'
import Role from './Admin/Role'
import User from './Admin/User'
import RoleAccess from './Admin/RoleAccess'
import DocumentType from './Admin/DocumentType'
import Directory from './Admin/Directory'

export default {
    ADD_ACCESS: {
		id: '397f3fd5-a1d1-49bd-b8b8-9055932a3ddc',
		name: 'Работа с доступом',
		url: '/cabinet/access',
		icon: <UserAddOutlined />,
		component: RoleAccess,
	},
	ADD_ROLE: {
		id: 'c93920e9-9f32-444e-a381-14c68324a201',
		name: 'Работа с ролями',
		url: '/cabinet/role',
		icon: <UserAddOutlined />,
		component: Role,
	},
	ADD_USER: {
		id: '8a65d21a-0fb1-416b-9d34-6318f8a7ec26',
		name: 'Работа с пользователями',
		url: '/cabinet/user',
		icon: <EditOutlined />,
		component: User,
	},
	ADD_DOCUMENT_TYPE: {
		id: '8a65d21a-0fb1-416b-9d34-6318f8a7ec27',
		name: 'Работа с типами документов',
		url: '/cabinet/document-type',
		icon: <EditOutlined />,
		component: DocumentType,
	},
	ADD_DIRECTORY: {
		id: '8a65d21a-0fb1-416b-9d34-6318f8a7ec28',
		name: 'Работа со справочникам',
		url: '/cabinet/directory',
		icon: <EditOutlined />,
		component: Directory,
	},
}

export const setting = [
	{
		id: '29258b0c-0d80-434a-bb21-19b7c78b4846',
		name: 'Настройки рабочего стола',
		url: '/cabinet/setting',
		icon: <SettingOutlined />,
		component: Setting,
	},
]

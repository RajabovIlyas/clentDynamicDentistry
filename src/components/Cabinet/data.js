import React from "react";
import {
    SettingOutlined,
    UserAddOutlined,
    EditOutlined,
} from '@ant-design/icons';
import {FaUserEdit} from "react-icons/fa";
import Setting from "./Setting/Setting";
import Role from "./Admin/Role";
import User from "./Admin/User";


export const dataMenu = {
    admin: [
        {
            id: 'c93920e9-9f32-444e-a381-14c68324a201',
            name: 'Работа с ролями',
            url: '/cabinet/role',
            icon: <UserAddOutlined/>,
            component: Role,
        },
        {
            id: '8a65d21a-0fb1-416b-9d34-6318f8a7ec26',
            name: 'Работа с пользователями',
            url: '/cabinet/user',
            icon: <EditOutlined/>,
            component: User,
        }
    ],
    user: [],
    leadership: [],
    office: {
        administrator: [],
        accountant: [],
        salesDepartment: [],
        logisticsDepartment: [],
        purchaseDepartment: []
    },
    production: {
        seniorSiteTechnician: [],
        dentalTechnician: []
    }
}

export const setting = [
    {
        id: '29258b0c-0d80-434a-bb21-19b7c78b4846',
        name: 'Настройки рабочего стола',
        url: '/cabinet/setting',
        icon: <SettingOutlined/>,
        component: Setting,
    }
]

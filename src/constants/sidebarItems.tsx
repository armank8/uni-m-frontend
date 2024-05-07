import type { MenuProps } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

export const sidebarItems = (role: string) => {
    const defaultSidebarItems: MenuProps["items"] = [
        {
            label: "Profile",
            key: "profile",
            icon: < UserOutlined />,
            children: [{
                label: "Account Profile",
                key: "profile"
            },
            {
                label: "Change Password",
                key: 'profile'
            }
            ],
        }
    ]
    if(role==='student') return defaultSidebarItems;
}
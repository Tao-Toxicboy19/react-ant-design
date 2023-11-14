import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Link } from 'react-router-dom';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

type Props = {}

export default function SiderLayout({ }: Props) {
    return (
        <Sider width={200}>
            <Menu
                className='dark:text-gray-100 dark:bg-slate-900 bg-[#e5e5e5] duration-1000'
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }
                }
                items={
                    [
                        {
                            key: '1',
                            icon:
                                <Link to="/">
                                    <UserOutlined />
                                </Link>,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon:
                                <Link to="/videos">
                                    <VideoCameraOutlined />
                                </Link>,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon:
                                <Link to="/upload">
                                    <UploadOutlined />
                                </Link>,
                            label: 'nav 3',
                        },
                    ]}
            />
        </Sider>
    )
}

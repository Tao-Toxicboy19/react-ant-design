import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Link } from 'react-router-dom';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

type Props = {}

export default function SiderLayout({ }: Props) {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
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

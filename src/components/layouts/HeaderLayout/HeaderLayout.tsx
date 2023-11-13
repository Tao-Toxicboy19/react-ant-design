import { theme } from 'antd';
import { Header } from 'antd/es/layout/layout';

type Props = {}

export default function HeaderLayout({ }: Props) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Header style={{ padding: 0, background: colorBgContainer }} />
        </>
    )
}
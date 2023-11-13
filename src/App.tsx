import { Layout, theme } from 'antd';
import HomePage from './components/pages/HomePage';
import SiderLayout from './components/layouts/SiderLayout/SiderLayout';
import HeaderLayout from './components/layouts/HeaderLayout/HeaderLayout';
import FooterLayout from './components/layouts/FooterLayout/FooterLayout';
import { Content } from 'antd/es/layout/layout';
import { Route, Routes } from 'react-router-dom';

type Props = {}

export default function App({ }: Props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>

      <SiderLayout />

      <Layout>

        <HeaderLayout />

        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: "100vh", background: colorBgContainer }}>

            <Routes>

              <Route path="/" element={<HomePage />} />

            </Routes>

          </div>
        </Content>

        <FooterLayout />

      </Layout>

    </Layout>
  );
}


import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SiderLayout from './components/layouts/SiderLayout/SiderLayout';
import HeaderLayout from './components/layouts/HeaderLayout/HeaderLayout';
import FooterLayout from './components/layouts/FooterLayout/FooterLayout';
import LoginPage from './components/pages/LoginPage/LoginPage';

type Props = {}

export default function App({ }: Props) {

  return (
    <Layout>

      <SiderLayout />

      <Layout>

        <HeaderLayout />

        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{ padding: 24, minHeight: "83.6dvh" }}
            className='dark:text-gray-100 dark:bg-slate-900 bg-[#e5e5e5] duration-500'
          >
            <Routes>

              <Route path="/" element={<HomePage />} />

              <Route path="/login" element={<LoginPage />} />

            </Routes>

          </div>
        </Content>

        <FooterLayout />

      </Layout>

    </Layout>
  );
}


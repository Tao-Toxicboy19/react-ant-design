import { Layout, theme } from 'antd';
import HomePage from './components/pages/HomePage';
import SiderLayout from './components/layouts/SiderLayout/SiderLayout';
import HeaderLayout from './components/layouts/HeaderLayout/HeaderLayout';
import FooterLayout from './components/layouts/FooterLayout/FooterLayout';
import { Content } from 'antd/es/layout/layout';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { IoMdSunny } from "react-icons/io";
import { FaMoon, FaDesktop } from 'react-icons/fa';
import { useEffect, useState } from 'react';



type Props = {}

export default function App({ }: Props) {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "system"
  );
  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
  console.log(darkQuery)
  const options = [
    {
      icon: "IoMdSunny",
      text: "light"
    },
    {
      icon: "FaMoon",
      text: "dark"
    },
    {
      icon: "FaDesktop",
      text: "system"
    }
  ]

  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark")
    } else {
      element.classList.remove("dark")
    }
  }

  onWindowMatch()

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break;

      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break;

      default:
        localStorage.removeItem('theme')
        break;
    }
  }, [theme]);

  return (
    <Layout>

      <SiderLayout />

      <Layout>

        <HeaderLayout />

        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{ padding: 24, minHeight: "83.6dvh" }}
            className='dark:text-gray-100 dark:bg-slate-900 duration-100'
          >
            <div className='flex top-5 right-10 duration-100 dark:bg-slate-700 bg-gray-100 rounded-xl'>
              {options?.map(opt => (
                <button
                  key={opt.text}
                  onClick={() => setTheme(opt.text)}
                  className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && 'text-sky-600'}`}
                >
                  {opt.icon === 'IoMdSunny' && <IoMdSunny />}
                  {opt.icon === 'FaMoon' && <FaMoon />}
                  {opt.icon === 'FaDesktop' && <FaDesktop />}
                </button>
              ))}
            </div>
            <Routes>

              {/* <Route path="/" element={<HomePage />} /> */}

              {/* <Route path="/login" element={<LoginPage />} /> */}

            </Routes>

          </div>
        </Content>

        <FooterLayout />

      </Layout>

    </Layout>
  );
}


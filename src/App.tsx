import { Avatar, Button, Dropdown, Layout, MenuProps, Tooltip } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Link, NavigateFunction, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SiderLayout from './components/layouts/SiderLayout/SiderLayout';
import HeaderLayout from './components/layouts/HeaderLayout/HeaderLayout';
import FooterLayout from './components/layouts/FooterLayout/FooterLayout';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { loginSelector, restoreLogin } from './store/slices/loginSlice';
import { useAppDispatch } from './store/store';
import { useSelector } from 'react-redux';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';

type Props = {}

export default function App({ }: Props) {
  const dispatch = useAppDispatch()
  const loginReducer = useSelector(loginSelector)
  const location = useLocation();

  useEffect(() => {
    dispatch(restoreLogin())
  }, []);
  
  return (
    <main className='flex flex-col min-h-screen bg-[#EFF2F8]'>
      <div className='grid grid-cols-8'>

        {loginReducer.result && <SiderLayout />}

        <div className={`${loginReducer.result ? "col-span-7" : "col-span-8"}`}>

        {loginReducer.result && location.pathname !== '/profile' && <HeaderLayout />}

          <Content>
            <Routes>

              <Route element={<PrivateRoute />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>

              <Route element={<PublicRoute />}>

                <Route path='/login' element={<LoginPage />} />

              </Route>

            </Routes>
          </Content>
        </div>
      </div>
    </main>
  );
}



// <Layout>

//   <SiderLayout />

//   <Layout>

//     <HeaderLayout />

//     <Content style={{ margin: '24px 16px 0' }}>
//       <div
//         style={{ padding: 24, minHeight: "83.6dvh" }}
//         className='dark:text-gray-100 dark:bg-slate-900 bg-[#e5e5e5] duration-500'
//       >
//         <Routes>

//           <Route path="/" element={<HomePage />} />

//           <Route path="/login" element={<LoginPage />} />

//         </Routes>

//       </div>
//     </Content>

//     <FooterLayout />

//   </Layout>

// </Layout>

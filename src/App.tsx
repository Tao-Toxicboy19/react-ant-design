import { Content } from 'antd/es/layout/layout';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SiderLayout from './components/layouts/SiderLayout/SiderLayout';
import HeaderLayout from './components/layouts/HeaderLayout/HeaderLayout';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { useEffect } from 'react';
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
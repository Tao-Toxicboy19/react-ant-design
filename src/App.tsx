import { Content } from 'antd/es/layout/layout';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import { useForm } from 'react-hook-form';
import axios from 'axios';
import HomePage from './components/pages/HomePage/HomePage';

type Props = {}

export default function App({ }: Props) {
  const dispatch = useAppDispatch()
  const loginReducer = useSelector(loginSelector)
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            {/* <form encType="multipart/form-data" onSubmit={handleSubmit((data) => {
              const formData: any = new FormData();
              formData.append('file', data.productImage[0]);
              formData.append('productName', data.productName);
              formData.append('price', data.price); // หรือ parseInt ตามที่คุณต้องการ
              formData.append('amount', data.amount); // หรือ parseInt ตามที่คุณต้องการ
              formData.append('productTypeId', data.productTypeId); // หรือ parseInt ตามที่คุณต้องการ

              axios.post('http://localhost:30/api/products', formData)
                .then(() => console.log('hello world'))
                .catch(err => console.log(err))

              const token = localStorage.getItem("token");
              const config = {
                headers: {
                  authorization: `Bearer ${token}`
                }
              };

            })}
            >
              <input {...register('productName')} />
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  {...register("productImage")}
                  className="block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-500 file:text-white
                                hover:file:bg-blue-600
                                "
                />
              </label>
              <input {...register('price', { valueAsNumber: true })} />
              <input {...register('amount', { valueAsNumber: true })} />
              <input {...register('productTypeId', { valueAsNumber: true })} />

              <input type="submit" />
            </form> */}
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
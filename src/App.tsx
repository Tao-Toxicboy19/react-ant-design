import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SiderLayout from './components/layouts/SiderLayout/SiderLayout';
import HeaderLayout from './components/layouts/HeaderLayout/HeaderLayout';
import FooterLayout from './components/layouts/FooterLayout/FooterLayout';
import LoginPage from './components/pages/LoginPage/LoginPage';
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";

type Props = {}

export default function App({ }: Props) {

  return (
    <main className='flex min-h-screen'>
      <div className='flex flex-col bg-red-200 min-h-screen w-16 sm:w-56'>
        <div className='w-full h-16 bg-slate-500 flex justify-center items-center'>
          logo
        </div>
        <div className='flex flex-col gap-y-3 mt-3'>
          <button className='w-full flex justify-center text-3xl py-2 transition duration-300 transform hover:scale-105 hover:bg-blue-100 hover:cursor-pointer'>
            <HiOutlineViewGrid className="text-xl" />
          </button>
          <button className='w-full flex justify-center text-3xl py-2 transition duration-300 transform hover:scale-105 hover:bg-blue-100 hover:cursor-pointer'>
            <FaRegUserCircle className="text-xl" />
          </button>
        </div>
      </div>
      <div className='w-full h-16 bg-red-200'>
        <div>
          Header
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

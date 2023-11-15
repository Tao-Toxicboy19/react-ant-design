import { Avatar, Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { CiLogin } from "react-icons/ci";
import { useAppDispatch } from '../../../store/store';
import { logout } from '../../../store/slices/loginSlice';

type Props = {}

function Profile() {
    const dispatch = useAppDispatch()

    return (
        <div className='mt-auto mb-5'>
            <div className='flex justify-center lg:justify-between mx-1.5 py-2 border border-[#595959] rounded-lg'>
                <div className='flex flex-row'>
                    <Avatar
                        size={40}
                        icon={
                            <img
                                src="https://scontent.fnak4-2.fna.fbcdn.net/v/t39.30808-6/344568860_761593092418229_8900964434983411857_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGzOkScmb1Key3qotXEMGAooPBqBk7r47mg8GoGTuvjuelkPvg-zk7sdDxlOJlfoP8oFPn8Mcdn0fekyBflde7K&_nc_ohc=9hkjIo_RsXEAX9axTCm&_nc_ht=scontent.fnak4-2.fna&oh=00_AfA3B_2p5mJNs4XFQWA-FdacjEmU3aHxrXbUUt9f_Ej4uA&oe=655A1F70"
                                alt="profile"
                            />
                        }
                    />
                    <div className='flex flex-col'>
                        <span className='text-[#595959] mb-auto mx-3 text-sm hidden xl:inline-block'>Prayut</span>
                        <span className='text-[#595959] mb-auto mx-3 text-xs hidden xl:inline-block'>ChanoCha</span>
                    </div>
                </div>
                <div className='text-[#595959] text-2xl my-auto hidden md:inline-block md:mr-5'>
                    <div className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#262626] duration-200'>
                        <Tooltip
                            placement="rightTop"
                            title={'logout'}
                        >
                            <button
                                className='text-[#595959]'
                                onClick={() =>
                                    dispatch(logout())
                                }
                            >
                                <CiLogin />
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}

const menu = [
    {
        path: '/',
        name: 'Home',
        icon: <HiOutlineViewGrid />
    },
    {
        path: '/profile',
        name: 'Profile',
        icon: < FaRegUserCircle />
    }
]

function Menus() {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex flex-col gap-y-3 mt-3'>
                {menu.map((items) => (
                    <NavLink
                        key={items.path}
                        to={items.path}
                        className={`w-full flex justify-center py-2 duration-300 hover:bg-[#262626] hover:cursor-pointer focus:ring-gray-500 rounded-lg`}
                    >
                        <span className='text-[#595959] flex gap-x-2'>
                            <div className='text-xl mt-0.5'>
                                {items.icon}
                            </div>
                            <span className='hidden lg:inline-block text-md'>
                                {items.name}
                            </span>
                        </span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default function SiderLayout({ }: Props) {
    return (
        <div className='col-span-1 flex flex-col bg-[#171818] min-h-screen'>
            <div className='w-full h-16 bg-slate-500 flex justify-center items-center'>
                logo
            </div>
            <Menus />
            <Profile />
        </div>
    )
}

import { Alert, Space } from "antd"
import { IoChevronDownOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { useAppDispatch } from "../../../store/store";
import { loginAsync, loginSelector } from "../../../store/slices/loginSlice";
import { useSelector } from "react-redux";

type Props = {}

function FormLogin() {
    const dispatch = useAppDispatch()
    const loginReducer = useSelector(loginSelector);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form
            className="w-full"
            onSubmit={handleSubmit((data) => {
                dispatch(loginAsync(data))
            })}
        >
            <Space
                size={16}
                direction="vertical"
                className="w-full h-96 px-16 py-8 flex flex-col justify-center"
            >
                <span className="text-3xl flex justify-center font-bold border-b tracking-wider">
                    Sign in
                </span>

                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="text"
                        {...register('username', { required: true })}
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Username
                    </label>


                </div>
                {errors.username && <Alert message="Please enter username." type="error" />}

                <div className="relative h-11 w-full min-w-[200px]">
                    <input
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="password"
                        {...register('password', { required: true })}
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Password
                    </label>
                </div>
                {errors.password && <Alert message="Please enter password." type="error" />}

                <button
                    type="submit"
                    className="bg-[#FF4A2B] w-full py-2 rounded-lg text-white"
                >
                    SIGN IN
                </button>
                {loginReducer.error && <Alert message="Wrong username or password." type="error" />}
            </Space>
        </form>
    )
}

export default function LoginPage({ }: Props) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-9/12">
                <div className="w-full rounded-lg drop-shadow-md">
                    <div className="flex flex-row bg-white rounded-lg">

                        <FormLogin />

                        <div className="hidden lg:inline-block w-full">
                            <div className="flex flex-col justify-center gap-y-3 h-full rounded-tr-lg rounded-br-lg bg-gradient-to-l from-[#FB3941] to-[#ff3769]">
                                <span className="mx-auto text-2xl font-medium text-white">
                                    HELLO, Friend
                                </span>
                                <div className="flex flex-col gap-y-3">
                                    <span className="flex justify-center text-lg font-medium text-white">
                                        sign up here.
                                    </span>
                                    <div>
                                        <div className="flex justify-center text-white text-xl">
                                            <IoChevronDownOutline />
                                            <IoChevronDownOutline />
                                        </div>
                                    </div>
                                </div>
                                <button className="w-7/12 py-2 rounded-lg flex justify-center mx-auto border text-white font-medium tracking-wide">
                                    SIGN UP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
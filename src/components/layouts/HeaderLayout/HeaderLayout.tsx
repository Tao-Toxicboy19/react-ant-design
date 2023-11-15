import { useState, useEffect } from 'react';
import { IoMdSunny } from "react-icons/io";
import { FaMoon, FaDesktop } from 'react-icons/fa';

type Props = {}

export default function HeaderLayout({ }: Props) {
    const [theme, setTheme] = useState<string | null>(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );
    const element = document.documentElement
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
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
                onWindowMatch()
                break;
        }
    }, [theme]);

    return (
        <div className='dark:text-gray-100 h-16 dark:bg-[#90a955] bg-[#cce3de] duration-1000'>
            <div className='flex justify-end'>
                <div className='flex duration-500 rounded-xl dark:bg-slate-700 bg-gray-100'>
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
            </div>
            <div>
                hello
            </div>
        </div>
    )
}
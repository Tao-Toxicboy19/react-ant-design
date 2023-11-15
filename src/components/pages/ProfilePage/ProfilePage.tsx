import backgroundprofile from '../../../assets/335222763_168330922719509_3532252288224746336_n.jpg'

type Props = {}
const images = 'https://scontent.fnak4-2.fna.fbcdn.net/v/t39.30808-6/344568860_761593092418229_8900964434983411857_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGzOkScmb1Key3qotXEMGAooPBqBk7r47mg8GoGTuvjuelkPvg-zk7sdDxlOJlfoP8oFPn8Mcdn0fekyBflde7K&_nc_ohc=9hkjIo_RsXEAX9axTCm&_nc_ht=scontent.fnak4-2.fna&oh=00_AfA3B_2p5mJNs4XFQWA-FdacjEmU3aHxrXbUUt9f_Ej4uA&oe=655A1F70'

export default function ProfilePage({ }: Props) {
    return (
        <div className='grid grid-cols-8 mx-5 mt-3'>
            <div className='col-span-3 bg-white rounded-lg'>
                <div className='static  flex justify-center items-end'>
                    <div className=''>
                        <img
                            src={backgroundprofile}
                            alt="background-profile"
                            className='rounded-tl-lg rounded-tr-lg'
                        />
                    </div>
                    <div className='absolute top-[17rem]'>
                        <img
                            src={images}
                            alt="profile"
                            className='w-36 h-36 rounded-full border-4'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-y-5 my-5 w-full'>
                    <div className='flex justify-between mx-10'>
                        <button
                            className="bg-[#FF4A2B] w-28 py-2 rounded-lg text-white"
                        >
                            SIGN IN
                        </button>
                        <button
                            className="bg-[#FF4A2B] w-28 py-2 rounded-lg text-white"
                        >
                            SIGN IN
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-8/12 flex justify-around'>
                            <div className='flex flex-col'>
                                <span className='flex justify-center text-lg font-medium text-[#525F7F]'>
                                    22
                                </span>
                                <span className='text-md text-[#ADB5BD]'>
                                    Friends
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='flex justify-center text-lg font-medium text-[#525F7F]'>
                                    10
                                </span>
                                <span className='text-md text-[#ADB5BD]'>
                                    Photos
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='flex justify-center text-lg font-medium text-[#525F7F]'>
                                    89
                                </span>
                                <span className='text-md text-[#ADB5BD]'>
                                    Comments
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mx-auto'>
                        <div>
                            <span className='text-xl font-semibold text-[#525F7F]'>
                                Prayut chanocha
                            </span>
                            <span className='text-xl font-thin text-[#525F7F]'>
                                , 21
                            </span>
                        </div>
                        <span className='flex justify-center text-[#32325D]'>
                            Bucharest, Romania
                        </span>
                    </div>
                    <div>
                        <span className='flex justify-center text-[#32325D]'>
                            Solution Manager - Creative Tim Officer
                        </span>
                        <span className='flex justify-center text-[#32325D]'>
                            University of Computer Engineer
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
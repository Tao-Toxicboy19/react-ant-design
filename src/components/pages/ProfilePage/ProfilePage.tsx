import backgroundprofile from '../../../assets/335222763_168330922719509_3532252288224746336_n.jpg'

type Props = {}
const images = 'https://scontent.fnak4-2.fna.fbcdn.net/v/t39.30808-6/344568860_761593092418229_8900964434983411857_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGzOkScmb1Key3qotXEMGAooPBqBk7r47mg8GoGTuvjuelkPvg-zk7sdDxlOJlfoP8oFPn8Mcdn0fekyBflde7K&_nc_ohc=9hkjIo_RsXEAX9axTCm&_nc_ht=scontent.fnak4-2.fna&oh=00_AfA3B_2p5mJNs4XFQWA-FdacjEmU3aHxrXbUUt9f_Ej4uA&oe=655A1F70'

const Detail = [
    { amount: 22, title: 'Friends' },
    { amount: 10, title: 'Photos' },
    { amount: 89, title: 'Comments' },
]

export default function ProfilePage({ }: Props) {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-row gap-5 bg-red-200 mx-5'>
                <div className='w-96 bg-white min-h-fit'>
                    <div className='relative flex justify-center items-end'>
                        <div className=''>
                            <img
                                src={backgroundprofile}
                                alt="background-profile"
                                className='rounded-tl-lg rounded-tr-lg min-w-full min-h-62 object-cover'
                            />
                        </div>
                        <div className='fixed top-36'>
                            <img
                                src={images}
                                alt="profile"
                                className='w-36 h-36 rounded-full border-4'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-5 my-5 w-full'>
                        <div className='flex justify-between mx-3'>
                            <button
                                className="bg-[#FF4A2B] w-24 py-1 rounded-lg text-white"
                            >
                                SIGN IN
                            </button>
                            <button
                                className="bg-[#FF4A2B] w-24 py-1 rounded-lg text-white"
                            >
                                SIGN IN
                            </button>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex flex-row justify-between w-full mx-5 mt-2'>
                                {(Detail).map((items) => (
                                    <div className='flex flex-col'>
                                        <span className='flex justify-center text-lg font-medium text-[#525F7F]'>
                                            {items.amount}
                                        </span>
                                        <span className='text-md text-[#ADB5BD]'>
                                            {items.title}
                                        </span>
                                    </div>
                                ))}
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
                <div className='h-full bg-green-300'>
                    <h1>hello</h1>
                </div>
            </div>

        </div>
    )
}
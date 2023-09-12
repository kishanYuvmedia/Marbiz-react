import React from 'react'
import celeb1 from "../Images/celeb-1.webp";
import celeb2 from "../Images/celeb-2.webp";

const Promotions = () => {
    return (
        <div className='container my-3'>
            <div className=' flex space-x-4 place-content-center '>
                <div>
                    <div href="#promotion1" className="flex flex-col items-center bg-indigo-400 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-red-100 dark:border-white-700 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:bg-indigo-800 dark:hover:bg-indigo-700 g-0">
                        
                        <img className=" h-96 md:h-auto lg:w-52 md:w-48 md:rounded-none md:rounded-l-lg" src={celeb1} alt="celeb-1" />

                        <div className="flex flex-col justify-between p-4 leading-normal">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-red">Noteworthy technology acquisitions 2021</h5>

                            <p className="mb-3 font-normal text-white dark:text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div href="#promotion1" className="flex flex-col items-center bg-indigo-400 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-red-100 dark:border-white-700 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:bg-indigo-800 dark:hover:bg-indigo-700 g-0">
                        

                        <div className="flex flex-col justify-between p-4 leading-normal">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-red">Noteworthy technology acquisitions 2021</h5>

                            <p className="mb-3 font-normal text-white dark:text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                        <img className=" h-96 md:h-auto lg:w-60 md:w-48 md:rounded-none md:rounded-l-lg" src={celeb2} alt="celeb-2" />
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Promotions;
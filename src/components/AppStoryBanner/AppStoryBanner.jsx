// eslint-disable-next-line no-unused-vars
import React from 'react';
import banner from '../../assets/banner.png';



const AppStoryBanner = () => {
    return (
        <div 
        className=' bg-white dark:bg-black dark:text-white pb-14'>
           <div className='text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl '
           >
            <img
            data-aos='fade-up'
            className='w-[1500px] h-[550px]'
             src={banner} />
             
            <div>
                <div>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default AppStoryBanner;
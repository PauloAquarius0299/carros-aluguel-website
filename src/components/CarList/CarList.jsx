// eslint-disable-next-line no-unused-vars
import React from 'react';
import car1 from '../../assets/car1.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import car4 from '../../assets/car4.png'

const CarListData = [
    {
        name: 'BMW UX',
        price: 100,
        image: car1,
        aosDelay: '0',
    },
    {
        name:'BMW X5',
        price: '400',
        image: car2,
        aosDelay: '500',
    },
    {
        name:'Tesla Y',
        price: '1000',
        image: car3,
        aosDelay: '1000',
    },
    {
        name:'AUDI',
        price: '350',
        image: car4,
        aosDelay: '1500',
    },
]

const CarList = () => {
    return (
        <div className='pb-24 pt-12 bg-white dark:bg-grey dark:text-white'>
            <div className='container'>
                {/*heading */}
                <h1 data-aos='fade-up' className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>
                    Preços e Quilometragem 
                    </h1>
                <p data-aos='fade-up' className='text-sm pb-10'>
                    Lorem ipsum dcdidm dolor sir, ssm cnseake endisisisaao , sisimds iaiaa pusim siidapam  djamdk dedamasm siainsi is!</p>
                    {/*Car Listing cards*/}
                <div>
                    <div 
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 gap-16'>
                        {
                            CarListData.map((data) => {
                                return (
                                // eslint-disable-next-line react/jsx-key
                                <div
                                data-aos='fade-up'
                                data-aos-delay={data.aosDelay}
                                className='space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group'
                                >
                                    <div className='w-full h-[120px]'>
                                        <img 
                                        className='w-full h-[200px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700'
                                        src={data.image} />
                                    </div>
                                    <div className='space-y-2'>
                                        <h1 className='text-primary font-semibold'>{data.name}</h1>
                                        <div className=' flex justify-between items-center text-xl font-semibold'>
                                            <p>${data.price}/Por Dia</p>
                                            <a href='#' >Detalhes</a>
                                        </div>
                                    </div>
                                    <p className='text-xl font-semibold absolute top-0 left-3'>
                                        12km
                                    </p>
                                </div>
                                );
                            })}
                    </div>
                </div>
                {/* end of car listing cards */}
                <div className='grid place-content-center mt-10'>
                    <button data-aos='fade-up' className='button-outline'>
                        Mais Opções
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarList;
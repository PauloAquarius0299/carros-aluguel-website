// eslint-disable-next-line no-unused-vars
import React from 'react';



const TestimonialData = [
    {
        name: 'Roger',
        image: '',
        description: 'lorem nsdnlss dslds aknasnansnas a skjnsjas s ksjnajsansnjka sjbshbsjsjaka  sjsjkansknajksa jasjkaska jasakja.',
        aosDelay: '0',
    },
    {
        name: 'Lucas',
        image: '',
        description: 'lorem nsdnlss dslds aknasnansnas a skjnsjas s ksjnajsansnjka sjbshbsjsjaka  sjsjkansknajksa jasjkaska jasakja.',
        aosDelay: '300',
    },
    {
        name: 'Anderson',
        image: '',
        description: 'lorem nsdnlss dslds aknasnansnas a skjnsjas s ksjnajsansnjka sjbshbsjsjaka  sjsjkansknajksa jasjkaska jasakja.',
        aosDelay: '800',
    },

]

const Testimonial = () => {
    return (
        <div className='dark:bg-black dark:text-white py-14 sm:pb-24'>
            <div className='container'>
                {/*header*/}
                <div className='space-y-4 pb-12'>
                    <p data-aos='fade-up' className='text-3x1 font-semibold text-center sm:text-4xl font-serif'
                    >Avaliação dos Nossos Clientes</p>
                    <p data-aos='fade-up' className='text-center sm:px-44'>Lorem sdosd nsjnjs jsnaja gagga hbsjsjksa sdsnsksnk jsdnskndsjbsdu skdsk sndksd nnksnskj agarrsghs tagbanta yaagaha abaanaj akanakaka.
                    </p>
                </div>
                {/*card section */}
                <div className='grid grid-cols1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white'>
                    {
                        TestimonialData.map((data) => {
                            return <div
                            data-aos='fade-up'
                            data-aos-delay={data.aosDelay}
                            className='card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg' 
                            key={data.name}>
                                <div className='grid place-items-center'>
                                    
                                    <img src="https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255588-stock-illustration-empty-photo-of-male-profile.jpg" className='h-20 w-20 rounded-full' />
                                </div>
                                <div className='text-2xl'>⭐⭐⭐⭐⭐</div>
                                <p>{data.description}</p>
                                <p className='font-semibold text-center'>{data.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Testimonial;
// eslint-disable-next-line no-unused-vars
import React from 'react';
import carAbout from '../../assets/carAbout.png'

const About = () => {
    return (
    <div className='dark:bg-grey bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                <div
                data-aos='slide-right'
                data-aos-duration='1500'
                >
                    <img src={carAbout} 
                    className='sm-scale-105 sm:translate-x-11 max-h-[300] drop-shadow-['
                    />
                </div>
                <div>
                    <div className='space-y-5 sm:p-16 pb-6'>
                        <h1 data-aos='fade-up' className='text-3xl sm:text-4xl font-bold font-serif'
                        >Sobre Nós
                        </h1>
                        <p data-aos='fade-up'>
                            lorem snos xnsnxn jnanxnik jnjanaj hhxnn aybahbza Hauruuamzmi isio IANIN uxns jufagcgrags jjsskks iajaiamaima  xjsnsx nxisnxks hbsjnc  grcacdraa jtstssjasanak hsd yy ssushsu uanaia is uus asajana. Hsinss njsnxjsnx njiqoaodme eie he jendn ene ndkene dnks nd  ksks xsnk.
                        </p>
                        <p data-aos='fade-up'>
                            lorem fhjd ka jtstssjasanak hsd yy ssushsu uanaia is uus asajana. Hsinss njsnxjsnx njiqoaodme eie he jendn ene ndkene.
                        </p>
                        <button data-aos='fade-up' className='button-outline '>
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default About;
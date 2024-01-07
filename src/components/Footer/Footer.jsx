// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const FooterLinks = [
    {
        title: 'Inicio',
        link: '/#',
    },
    {
        title: 'Sobre',
        link: '/#about',
    },
    {
        title: 'Contatos',
        link: '/#contact',
    },
    {
        title: 'Blog',
        link: '/#blog',
    },
]

const Footer = () => {
    return (
        <div className=' bg-white dark:bg-grey dark:text-white'>
            <div className='container'>
                <div className='grid md:grid-cols-3 py-5'>
                    {/*Company details*/}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center'>Aluguel de Carro
                        </h1>
                        <p>lorem ipsum uuaa dolro aiaia aia sisis siauababa sjbajsajbkKk sbsbsbs skkjskksk jkjsa a skskja akjsakja.</p>
                        <br />
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>Belo Horizonte, MG - Brasil</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaMobileAlt />
                            <p>55+ 123456789</p>
                        </div>
                        {/*social handles*/}
                        <div className='flex items-center gap-3 mt-3 mt-6'>
                            <a href='#'>
                                <FaInstagram className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href='#'>
                                <FaFacebook className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href='#'>
                                <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                            </a>
                        </div>
                    </div>
                    {/*Navlinks*/}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        {/*first col */}
                        <div>
                            <div className=''>
                                <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 mt-8'>Links Importantes</h1>
                                <ul className='flex flex-col gap-3 mt-6'>
                                    {
                                        FooterLinks.map((data) => {
                                            return (
                                                <li key={data.title}
                                                className='cursor-pointer hover:text-primary duration-300'
                                                >
                                                    <span className='mr-2'>&#11162;</span>
                                                    <a href={data.link}
                                                    >{data.title}</a>
                                                </li>


                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                         {/*second col */}
                         <div>
                            <div>
                                <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 mt-8'>Links Importantes</h1>
                                <ul className='flex flex-col gap-3 mt-6'>
                                    {
                                        FooterLinks.map((data) => {
                                            return (
                                                <li key={data.title}
                                                className='cursor-pointer hover:text-primary duration-300'
                                                >
                                                    <span className='mr-2'>&#11162;</span>
                                                    <a href={data.link}
                                                    >{data.title}</a>
                                                </li>


                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                         {/*terceira col */}
                         <div>
                            <div>
                                <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 mt-8'>Links Importantes</h1>
                                <ul className='flex flex-col gap-3 mt-6'>
                                    {
                                        FooterLinks.map((data) => {
                                            return (
                                                <li key={data.title}
                                                className='cursor-pointer hover:text-primary duration-300'
                                                >
                                                    <span className='mr-2'>&#11162;</span>
                                                    <a href={data.link}
                                                    >{data.title}</a>
                                                </li>


                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
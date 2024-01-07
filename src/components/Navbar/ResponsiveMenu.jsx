// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { NavLinks } from './Navbar';
 

// eslint-disable-next-line react/prop-types
const ResponsiveMenu = ({ showMenu }) => {
    return (
        <div className={` ${showMenu ? 'left-0' : 'left-full'} fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}>
            <div className='card'>
                <div className='flex items-center justify-start gap-3'>
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Olá Usuario</h1>
                        <h1>Premium User</h1>
                    </div>
                </div>
                    {/*links*/}
                    <nav className='mt-12'>
                        <ul className='space-y-4 text-xl'>
                            {
                                NavLinks.map((data) => (
                                    <li>
                                        <a href={data.link}>{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
            </div>
            <div>
                <br></br>
                <h1>Meu perfil GitHub: 
                    <a href='https://github.com/PauloAquarius0299'>PAULO,Dev</a>
                </h1>
            </div>
        </div>
    )
};

export default ResponsiveMenu;
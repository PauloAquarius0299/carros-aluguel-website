/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { HiMenuAlt3, HiMenuAlt1} from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu';

export const NavLinks = [
    {
        id:'1',
        name: 'INICIO',
        link: '/#'
    },
    {
        id: 2,
        name: 'CARROS',
        link: '/#cars',
    },
    {
        id: 3,
        name: 'SOBRE',
        link: '/#about',
    },
    {
        id: 4,
        name: 'RESERVA',
        link: '/#booking',
    },
];

// eslint-disable-next-line react/prop-types
const Navbar = ({theme, setTheme}) => {
    const [showMenu, setShowMenu] = useState(false);

    const togglemenu = () => {
        setShowMenu(!showMenu);
    };

  return ( 
  <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40'>
        <div className="container">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-xl font-bold font-serif'>RentalCarros</h1>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-8'>
                        {NavLinks.map((data) => (
                        <li key={data.id} className='py-4'>
                            <a className=' py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium' href={data.link}>
                                {data.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                {/*dark mode icons */}
                <div>
                    
                    {
                     // eslint-disable-next-line no-undef
                     theme === 'dark'?(
                            <BiSolidSun 
                            onClick={() => setTheme ('light')}
                            className='text-2x1' />
                        ): (
                            <BiSolidMoon
                            onClick={() => setTheme ('dark')}
                            className='text-2x1' />
                        )}
                    
                </div>
                {/*mobile hamberger menu*/}
                {
                    showMenu?(
                        <HiMenuAlt1 
                        onClick={togglemenu}
                        size={30} 
                        className='cursor-pointer transition-all'
                        />
                    ) : (
                        <HiMenuAlt3 
                        onClick={togglemenu}
                        size={30} 
                        className='cursor-pointer transition-all'
                        />
                    )
                }
            </div>
        </div>
        <ResponsiveMenu showMenu={showMenu}  />
    </nav>
  )
  
};

export default Navbar
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';

const skillsData = [
    {
        name: 'Melhor Preço',
        icon: (
            <FaCameraRetro className='text-5xl text-primary group-hover:text-black duration-300' />
        ),
        link: '#',
        description: 'lorem sijdisd skdsmdi isdsmdk jbdjhbabhjbl dj dbdjbj ddjjds jsndjns jsndjgats sjid shhaj shatiod d ud imsk .',
        aosDelay: '0',
    },
    {
        name: 'Rapido e Seguro',
        icon: (
            <GiNotebook className='text-5xl text-primary group-hover:text-black duration-300' />
        ),
        link: '#',
        description: 'lorem sijdisd skdsmdi isdsmdk jbdjhbabhjbl dj dbdjbj ddjjds jsndjns jsndjgats sjid shhaj shatiod d ud imsk .',
        aosDelay: '500',
    },
    {
        name: 'Experiencias de Entrega',
        icon: (
            <SlNote className='text-5xl text-5xl text-primary group-hover:text-black duration-500' />
        ),
        link: '#',
        description: 'lorem sijdisd skdsmdi isdsmdk jbdjhbabhjbl dj dbdjbj ddjjds jsndjns jsndjgats sjid shhaj shatiod d ud imsk .',
        aosDelay: '1000',
    },
]

const Services = () => {
    return (
    <div className='py-14 dark:bg-black dark:text-white sm-min-h[600px] sm:grid sm:place-items-center'>
        <div className='container'>
            <div className='pb-12'>
                <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>Porque Nós Escolher?</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {skillsData.map((skill) => (
                        <div
                        key={skill.name}
                        data-aos='fade-up'
                        data-aos-delay={skill.aosDelay}
                        className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-grey hover:bg-primary text-white hover:text-black rounded-lg'
                        >
                            <div>{skill.icon} </div>
                            <h1>{skill.name}</h1>
                            <p>{skill.description}</p>
                            <a href={skill.link}>Aprenda Mais</a>
                        </div>
                    ))}
            </div>
        </div>
    </div>
    )
};

export default Services;
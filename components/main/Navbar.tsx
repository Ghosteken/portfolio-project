import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50  bg-[#03001417 backdrop-blur-md z-50 px-10]'>
            <div className='h-full w-full flex flex-row items-center justify-between m-auto px-[10px]'>
                <a href="#about me" className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src='/down.png'
                        alt='logo'
                        width={50}
                        height={50}
                        className='cursor-pointer hover:animate-slowspin'
                    />
                    <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                        Aigberua Nicholas
                    </span>
                </a>

                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between w-full h-auto bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" className='cursor-pointer hover:text-white focus:outline-none focus:border-none'>
                            About me
                        </a>

                        <a href="#skills" className='cursor-pointer hover:text-white focus:outline-none focus:border-none'>
                            Skills
                        </a>

                        <a href="#Projects" className='cursor-pointer hover:text-white focus:outline-none focus:border-none'>
                            Projects
                        </a>

                        <a href="/components/main/resume.tsx" target="_blank" className='cursor-pointer hover:text-white focus:outline-none focus:border-none'>
                            Resume
                        </a>

                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    {Socials.map((social) => (
                        <a href={social.link} key={social.name} target='_blank' rel='noopener noreferrer'>
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={24}
                                height={24}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

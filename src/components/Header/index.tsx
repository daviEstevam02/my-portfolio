import { Chivo_Mono } from 'next/font/google';
import Image from 'next/image'
import { useState } from 'react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const chivoMono = Chivo_Mono({ 
    subsets: ['latin'],
    variable: '--chivoMono-font'  
})

export function Header() {

    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandle = () => {
        setNavIsVisible(curState => {
            return !curState;
        })
    }

    return(
        <div className={`absolute flex items-center justify-between w-screen px-5 border-b-2 lg:px-16 bg-primary-500 border-b-gray-darkest ${chivoMono.className}`}>
            <div>
                <Image src='/DCLogo.png' width={100} height={100} alt="Davi Cavalcante Developer"/>
            </div>

            <div className='z-50 xl:hidden'>
                {
                    navIsVisible  ?
                    (<AiOutlineClose color='#A3A3A3' className='fixed top-9 right-5 lg:right-16 w-7 h-7 hover:cursor-pointer' onClick={navVisibilityHandle} />) : (<AiOutlineMenu  color='#A3A3A3'  className='w-7 h-7 hover:cursor-pointer' onClick={navVisibilityHandle} />)
                }
            </div>

            <div className={` ${navIsVisible ? 'right-0' : '-right-full'} bg-primary-500 xl:bg-transparent z-[49] fixed top-0 bottom-0 flex flex-col items-center justify-center w-full xl:w-auto  xl:static gap-x-9 xl:flex-row xl:justify-end text-gray-medium`}>
                <div  className='mt-10 xl:mt-0 xl:mr-10'>
                    <a href="#section-2" className='transition duration-300 group hover:text-gray-dark' onClick={navVisibilityHandle}>Últimos projetos
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-medium"></span>
                    </a>
                </div>

                <div className='mt-10 xl:mt-0 xl:mr-10'>
                    <a href="#section-3" className='transition duration-300 group hover:text-gray-dark' onClick={navVisibilityHandle}>Trabalhos anteriores
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-medium"></span>
                    </a>
                </div>

                <div className='mt-10 xl:mt-0 xl:mr-10'>
                    <a href="#section-4" className='transition duration-300 group hover:text-gray-dark' onClick={navVisibilityHandle}>Meu contato
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-medium"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}
import Image from 'next/image'
import { Inter, Chivo_Mono } from 'next/font/google'

import UseAnimations from 'react-useanimations'

import instagram from 'react-useanimations/lib/instagram'
import twitter from 'react-useanimations/lib/twitter'
import linkedin from 'react-useanimations/lib/linkedin'
import github from 'react-useanimations/lib/github'
import mail from 'react-useanimations/lib/mail'
import { useEffect, useState } from 'react'

import Typewriter from "typewriter-effect";

import { MdWavingHand } from 'react-icons/md'
import { Header } from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })
const chivoMono = Chivo_Mono({ 
  subsets: ['latin'],
  variable: '--chivoMono-font'  
 })

 interface IRepositoryGit {
  id: string;
  name: string;
  owner: IOwner;
  private: boolean;
  description: string;
  created_at: string;
  html_url: string;
}
interface IOwner {
  avatar_url: string;
  login: string;
}

export default function Home() {

  const [repositories, setRepositories] = useState<IRepositoryGit[]>([]);

  useEffect(() => {
      fetch('https://api.github.com/users/daviEstevam02/repos')
      .then(response => response.json())
      .then((data) => setRepositories(data))
  },[])

  const presentationSection = () =>{
    return(
      <div className='px-8 xl:w-[1220px] section-1 xl:flex-1 xl:flex xl:items-center xl:justify-center'>
        <div className='flex justify-center'>
          <Image src='/profilePic.jpeg' className='ml-0 mr-4 rounded-full border-gray-darkest'  width={300} height={220} alt="front-end developer image"/>
        </div>
        <div className='xl:min-w-[650px] mt-20 xl:mt-0'>
          <h2 className='text-gray-dark text-2xl md:text-[34px] text-center font'>Olá! Me chamo Davi!👋</h2>
          <div className={`text-gray-medium text-lg lg:max-w-[650px] text-center mt-6 ${chivoMono.className}`}>
          <Typewriter
            onInit={(typewriter)=> {
            typewriter
            .changeDelay(20)
            .typeString("Desenvolvedor front-end com mais de 4 anos no mercado de trabalho de tecnologia, focado no desenvolvimento de páginas web responsivas utilizando as ferramentas mais atuais do mercado!")
            .start()
            }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
   <>
      <Header />
      <div className={`w-full h-full pb-40 pt-40 xl:pt-0 bg-primary-500 ${chivoMono.className}`}>

        <div className='flex justify-center h-screen'>
          
          {presentationSection()}
        
        </div>

        <div className='container px-5 mx-auto my-0 lg:max-w-[800px]'>
          <div className='mt-10 ' id='section-2'>
           <div className='flex justify-center align-center'>
           <h2 className='text-gray-dark  text-2xl md:text-[34px] '>Ultimos projetos</h2>
            <UseAnimations animation={github} strokeColor='#3F3F3F' size={50}/>
           </div>

           <ul className='flex text-[20px] flex-col text-gray-medium text-center justify-evenly list-none lg:text-[25px]'>
              {
                repositories.slice(Math.max(repositories.length - 7, 0)).map(repository => (
                  <li className='mt-5 hover:text-gray-dark ' key={repository.id}><a href={repository.html_url}>{ repository.name }</a></li>
                ))
              }
           </ul>
          </div>

        <div className='mt-10 section-3 lg:mt-32' id='section-3'>
         <h2 className='text-gray-dark text-2xl md:text-[34px] text-center mt-14' >Trabalhos anteriores</h2>
          <ul className='flex text-lg md:text-[20px] mt-5 flex-wrap text-gray-medium text-center justify-evenly list-none lg:text-[25px]'>
            <li className='mr-3'>Go-it</li>
            <li className='mr-3'>Trentim</li>
            <li className='mr-3'>Digix</li>
            <li className='mr-3'>Pfizer</li>
            <li className='mr-3'>DLGreen</li>
            <li className='mr-3'>Fabric</li>
            <li className='mr-3'>Kantar Ibope Media</li>
            <li className='mr-3'>Total BR</li>
            <li className='mr-3'>Klabin</li>
            <li className='mr-3'>Deloitte</li>
            <li className='mr-3'>Mooh tech</li>
          </ul>
        </div>

        <div className='mt-16 section-4 lg:mt-60'  id='section-4'>
          <h2 className='text-gray-dark text-2xl md:text-[34px] text-center mt-10'>Vamos nos conectar!</h2>
          <div className='flex justify-center mt-6 button-wrapper align-center'>
              <button className='mr-5  border-none w-[50px] h-[50px] hover:scale-105 transition-transform bg-gray-darkest rounded-lg flex justify-center items-center'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_davi.estevam_/">
                 <UseAnimations strokeColor='#A3A3A3'  animation={instagram} size={32} autoPlay={true} />
                </a>
              </button>

              <button className='mr-5 border-none w-[50px] h-[50px] hover:scale-105 transition-transform bg-gray-darkest rounded-lg flex justify-center items-center'>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/estevam_davi"> 
                  <UseAnimations strokeColor='#A3A3A3' animation={twitter} size={32} autoPlay={true} />
                </a>
              </button>

              <button className='mr-5 border-none w-[50px] h-[50px] hover:scale-105 transition-transform bg-gray-darkest rounded-lg flex justify-center items-center'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/davi-cavalcante-4788a7181/">
                  <UseAnimations strokeColor='#A3A3A3'  animation={linkedin} size={32} />
                </a>
              </button>

              <button className='mr-5 border-none w-[50px] h-[50px] hover:scale-105 transition-transform bg-gray-darkest rounded-lg flex justify-center items-center'>
                <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=daviestevam02@gmail.com">
                  <UseAnimations strokeColor='#A3A3A3'  animation={mail} size={32} />
                </a>
              </button>

          </div>
        </div>


        </div>
      </div>
   </>
  )
}

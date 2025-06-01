import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'

function DBD_Project () {
  gsap.registerPlugin(ScrollTrigger)

  return (
    <div className='w-screen flex flex-col sm:flex-row h-[100dvh]'>
      <div
        className='flex-2/3 sm:flex-1/2 flex flex-col
       items-start justify-center p-5
        md:p-10 gap-3'
      >
        <h1 className='koulen text-4xl md:text-7xl'>DragonBall Dle</h1>
        <p className=''>
          Con 15.000 usuarios nuevos y <br /> 600 mil interacciones en los
          ultimos 28 dias
        </p>
      </div>
      <div className='flex-1/3 sm:flex-1/2 flex items-center'>
        <Image
          src='/projectsResources/dbd/dbd_hero.webp'
          width={2000}
          height={2000}
          alt='Header'
        />
      </div>
    </div>
  )
}

export default DBD_Project

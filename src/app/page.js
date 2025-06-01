'use client'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import BlurInSection from './components/layouts/BlurInSection'
import Intro from './components/molecules/Intro'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import DBD_Project from './components/ornanisms/DBD-Project'

export default function Home () {
  gsap.registerPlugin(ScrollTrigger)
  const projects = useRef()
  const contenido = useRef()

  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: contenido.current,
        pin: contenido.current,
        pinSpacing: false,
        start: 'top top',
        end: 'bottom top-=50%',
        onUpdate: self => {
          tl.progress(self.progress).play()
          tl.pause()
        }
      }
    })
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: contenido.current,
        pin: projects.current,
        pinSpacing: true,
        start: 'top top',
        end: 'bottom top-=10%',
        onUpdate: self => {
          tl2.progress(self.progress).play()
          tl2.pause()
        }
      }
    })

    tl.pause()
    tl2.pause()

    tl.fromTo(
      contenido.current,
      {
        maskImage:
          'radial-gradient(circle at 50% 50vh, rgb(0,0,0) 50vh, rgba(0,0,0,0) 90vh)',
        scale: 1
      },
      {
        maskImage:
          'radial-gradient(circle at 50% -90vh, rgb(0,0,0) 0vh, rgba(0,0,0,0) 80vh)',
        scale: 0.95
      }
    )
    tl2.fromTo(
      projects.current,
      {
        opacity: 0,
        filter: ' brightness(0) blur(100px)'
      },
      {
        opacity: 1,
        filter: ' brightness(1) blur(0px)'
      }
    )
  }, [])

  return (
    <>
      <main className=''>
        <section className='relative'>
          <div
            className='min-h-[100dvh] flex flex-col
             justify-center items-center bg-[var(--backgroundColorLight)]
             absolute'
            ref={contenido}
          >
            <Intro />
          </div>
          <article ref={projects}>
            <DBD_Project />
            <div className='h-[100dvh] bg-blue-400' />
            <div className='h-[100dvh] bg-green-400' />
          </article>
        </section>
      </main>
      <footer className='fixed flex justify-center bottom-0 left-0 w-screen '>
        <ChevronDownIcon
          className='size-12 scale-y-75
         stroke-2 text-[var(--intenseHighlight)] animate-bounce'
        />
      </footer>
    </>
  )
}

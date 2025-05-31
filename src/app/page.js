'use client'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import MovingLogo from './components/atoms/MovingLogo'
import { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'

export default function Home () {
  function logoAnimation (tl) {
    // Altura máxima del scroll
    const maxScroll = window.innerHeight * 0.65 //* 2
    const scrollPosition = window.scrollY
    // Calcular el porcentaje del scroll
    const scrollFraction = scrollPosition / maxScroll

    tl.progress(scrollFraction).play()
    tl.pause()
  }

  function createTimeline () {
    const logo = document.getElementById('logo')
    const logoWidth = logo.offsetWidth
    const logoPos = logo.getBoundingClientRect()

    const logoMask = document.getElementById('proyectos')
    logoMask.style.maskSize = `${logoWidth}px`
    logoMask.style.webkitMaskSize = `${logoWidth}px`
    logoMask.style.maskPosition = ` center ${logoPos.y}px`
    logoMask.style.webkitMaskPosition = ` center ${logoPos.y}px`

    let tl = gsap.timeline()
    tl.pause()
    tl.fromTo(
      '#proyectos',
      { maskPosition: ` center ${logoPos.y}px` },
      {
        maskSize: '2000dvh',
        maskPosition: ` center calc(-440dvh)`,
        ease: 'power1.inOut',
        delay: 0,
        duration: 2
      }
    )
    tl.fromTo(
      '#logoFondo',
      { backgroundColor: '#FFFFFFFF' },
      {
        backgroundColor: '#FFFFFF00',
        ease: 'none',
        delay: 0.5,
        duration: 0.5
      },
      '<'
    )
    return tl
  }

  useLayoutEffect(() => {
    scrollTo(0, 0)
    let tl = createTimeline()

    //Reconfigurar timeline al reescalar ventana y que se mantenga
    const reset = () => {
      tl = createTimeline()
      logoAnimation(tl)
    }
    //Funcion de scroll
    const scroll = () => {
      logoAnimation(tl)
    }

    window.addEventListener('resize', reset)
    document.addEventListener('scroll', scroll)

    return () => {
      document.removeEventListener('scroll', scroll)
      window.removeEventListener('resize', reset)
    }
  }, [])

  return (
    <>
      <main className='h-[150dvh]'>
        {/*Introduccion*/}
        <section className='fixed w-full h-[100dvh] pt-20 px-10 pointer-events-none'>
          <MovingLogo />
          <h1
            id='presentacion'
            className='text-center text-2xl
           font-medium [word-spacing:1px] mt-10 max-w-xl mx-auto'
          >
            Programador con más de{' '}
            <strong className='text-[var(--mediumHighlight)]'>3 años </strong>
            desarrollando aplicaciones con
            <strong className='text-[var(--mediumHighlight)] ml-2'>
              NextJS, MySQL y Java
            </strong>
          </h1>
        </section>
        {/*Proyectos*/}
        <section
          id='proyectos'
          className='fixed w-full min-h-[100dvh] logo pointer-events-none bg-[var(--backgroundColorLight)]'
        >
          <div id='logoFondo' className='absolute w-full h-full ' />

          <article
            className='pointer-events-auto w-full
           text-center pt-40 bg-[var(--backgroundColorLight)]'
          >
            <p className='p-5'>
              CONTENIDO CONTENIDO CONTENIDO CONTENIDO CONTENIDO CONTENIDO
              CONTENIDO CONTENIDO CONTENIDO CONTENIDO CONTENIDO CONTENIDO
              CONTENIDO CONTENIDO CONTENIDO CONTENIDO CONTENIDO CONTENIDO
              CONTENIDO CONTENIDO CONTENIDO CONTENIDO CONTENIDO CONTENIDO
              CONTENIDO CONTENIDO CONTENIDO CONTENIDO CONTENIDO CONTENIDO
              CONTENIDO CONTENIDO
            </p>
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

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect, useRef } from 'react'

function FadeSection ({ children }) {
  gsap.registerPlugin(ScrollTrigger)
  const seccion = useRef()
  const contenido = useRef()

  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: seccion.current,
        pin: contenido.current,
        pinSpacing: true,
        start: 'top top',
        end: 'bottom top-=50%',
        onUpdate: self => {
          tl.progress(self.progress).play()
          tl.pause()
        }
      }
    })
    tl.pause()

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
  }, [])

  return (
    <section ref={seccion} className='min-h-[100dvh]'>
      <div
        className='h-full flex flex-col justify-center items-center bg-[var(--backgroundColorLight)]'
        ref={contenido}
      >
        {children}
      </div>
    </section>
  )
}

export default FadeSection

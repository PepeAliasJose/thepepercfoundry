import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect, useRef } from 'react'

function BlurInSection ({ children }) {
  gsap.registerPlugin(ScrollTrigger)
  const seccion = useRef()
  const contenido = useRef()

  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: seccion.current,
        pin: contenido.current,
        pinSpacing: false,
        start: 'top top-=100%',
        end: 'top top-=150%',
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
    <section ref={seccion} className=''>
      <div className='h-[100dvh]' />
      <div ref={contenido}>{children}</div>
    </section>
  )
}

export default BlurInSection

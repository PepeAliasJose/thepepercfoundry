import Image from 'next/image'

function Intro () {
  return (
    <div className='w-screen flex flex-col justify-between items-center gap-5'>
      <Image
        className='w-64'
        src={'/Logo.svg'}
        width={1000}
        height={500}
        alt='PepeRCFoundry logo'
      />
      <h1
        className='font-semibold  text-2xl md:text-5xl
      text-center text-[var(--mediumHighlight)]'
      >
        Pepe Rodríguez Cáceres
      </h1>

      <h2
        id='presentacion'
        className=' text-center text-2xl md:text-3xl 
           font-semibold [word-spacing:1px] max-w-3xl mx-auto '
      >
        Más de <strong className='hl-text'>3 años </strong>
        desarrollando aplicaciones con
        <strong className='hl-text ml-2'>NextJS, MySQL y Java</strong>
      </h2>
    </div>
  )
}

export default Intro

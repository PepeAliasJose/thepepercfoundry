import Image from 'next/image'

function MovingLogo () {
  return (
    <div className='grid grid-cols-1 grid-rows-1 scale-[1] place-items-center'>
      <div id='logo' className='col-start-1 row-start-1 w-full max-w-xl '>
        <Image
          className='invisible'
          src='/Logo.svg'
          width={2000}
          height={1000}
          alt='logo'
        />
      </div>
    </div>
  )
}

export default MovingLogo

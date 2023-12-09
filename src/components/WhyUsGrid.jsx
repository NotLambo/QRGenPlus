function WhyUsGrid() {
    return (
    <div className='grid grid-flow-row-dense grid-cols-2 grid-rows-3 gap-16 p-2 h-fit md:grid-cols-3 md:grid-rows-2'>
          <div className='col-span-1 row-span-1'>
            <img
              loading='lazy'
              src='./briefcase.svg'
              className='inline-block w-14 h-14'
              alt='briefcase image'
            />
            <h2 className='text-2xl font-semibold text-left'>Professional</h2>
            <p className='max-w-32 md:max-w-52'>
              QRGenPlus is professional, efficient, fast, and easy to use.
            </p>
          </div>
          <div className='col-span-1 row-span-1'>
            <img
              loading='lazy'
              src='./mail.svg'
              className='inline-block w-14 h-14'
              alt='letter mail image'
            />
            <h2 className='text-2xl font-semibold text-left'>Shareable</h2>
            <p className='max-w-32 md:max-w-52'>
              QRGenPlus allows you to share easily with friends or family.
            </p>
          </div>
          <div className='col-span-1 row-span-1'>
            <img
              loading='lazy'
              src='./database.svg'
              className='inline-block w-14 h-14'
              alt='database image'
            />
            <h2 className='text-2xl font-semibold text-left'>Up to Date</h2>
            <p className='max-w-32 md:max-w-52'>
              QRGenPlus stays up to date with security and code bases.
            </p>
          </div>
          <div>
            <img
              loading='lazy'
              src='./check-circle.svg'
              className='inline-block w-14 h-14'
              alt='checkmark image'
            />
            <h2 className='text-2xl font-semibold text-left'>Optimized</h2>
            <p className='max-w-32 md:max-w-52'>
              QRGenPlus is optimized and offers QR codes with no URL shorteners.
            </p>
          </div>
          <div>
            <img
              loading='lazy'
              src='./code.svg'
              className='inline-block w-14 h-14'
              alt='code image'
            />
            <h2 className='text-2xl font-semibold text-left'>Printable</h2>
            <p className='max-w-32 md:max-w-52'>
              The QR codes we generate are high quality and can be printed.
            </p>
          </div>
          <div>
            <img
              loading='lazy'
              src='./monitor.svg'
              className='inline-block w-14 h-14'
              alt='desktop PC image'
            />
            <h2 className='text-2xl font-semibold text-left'>High Quality</h2>
            <p className='max-w-32 md:max-w-52'>
              QRGenPlus generates high quality and high resolution QR codes.
            </p>
          </div>
    </div>
    )
}

export default WhyUsGrid

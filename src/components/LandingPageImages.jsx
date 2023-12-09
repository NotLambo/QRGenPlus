function LandingPageImages() {
  return (
    <div className='hidden grid-cols-5 gap-4 overflow-hidden lg:grid-cols-7 sm:grid'>
      <img
        src='./stock-tall-man.webp'
        className='col-span-1 rounded-3xl lg:col-span-1 lg:row-span-1'
        alt='Image of an indivdual on his laptop'
        data-aos="fade-right"
        data-aos-duration="1000"
      />
      <img
        src='./stock-tall-shop.webp'
        alt='Image of an indivdual in a coffee shop on his laptop'
        className='rounded-3xl relative top-[49%]'
        data-aos="fade-down"
        data-aos-duration="1000"
      />
      <img
        src='./stock-tall-computer.webp'
        className='col-start-5 rounded-3xl lg:col-start-7'
        alt='Image of an indivdual debugging a program'
        data-aos="fade-down"
        data-aos-duration="1000"
      />
      <img
        src='./stock-wide-laptop.webp'
        className='col-span-1 rounded-3xl'
        alt='Image of an indivdual on his laptop'
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <img
        src='./stock-wide-qrcode.webp'
        className='col-start-5 rounded-3xl lg:col-start-7'
        alt='Image of an QR code'
        data-aos="fade-left"
        data-aos-duration="1000"
      />
    </div>
  );
}

export default LandingPageImages;
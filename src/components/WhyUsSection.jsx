import WhyUsGrid from "./WhyUsGrid";

function WhyUsSection() {
  return (
    <section className="p-2 border-black border-b-1" id="about">
      <h1 className="text-2xl font-semibold text-center">Why QRGenPlus?</h1>
      <div className='inline-flex items-center justify-center'>
        <img
          src='./high-quality-hand.webp'
          className='hidden xl:inline-block'
          loading='lazy'
          alt='QRGenPlus Mascot Image.'
          />
        <WhyUsGrid />
      </div>
    </section>
  );
}

export default WhyUsSection;

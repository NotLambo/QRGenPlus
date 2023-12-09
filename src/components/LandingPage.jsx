import { useState } from 'react';
import LandingPageImages from './LandingPageImages.jsx';
import GeneratedQRCode from './GeneratedQRCode.jsx';

function LandingPage() {
  const [ userInput, setUserInput ] = useState('');
  const [ showQR, setShowQR ] = useState(false);
  
  function handleSubmit(e) {
    e.preventDefault();
    setShowQR(!showQR)
  }
  return (
    <section className='py-10' id="landingpage">
      <h1 className='text-4xl font-semibold text-center'>
        <span className='text-4xl font-semibold text-center text-accent'>Scan</span>,
        Connect, and Experience!
      </h1>
      <h2 className='font-normal text-center text-m'>
        Generate a scannable QR code from a link.
      </h2>
      <form className='flex flex-wrap justify-center gap-6'>
        <input
          type='text'
          className='m-15 p-4 rounded-2xl border-[0.5px] border-black w-fit h-fit font-extralight text-normal focus:rounded-3xl transition-all focus:border-none'
          placeholder='https://qrgenplus.netlify.app'
          value={userInput}
          onChange={(e) => {
            setShowQR(false);
            setUserInput(e.target.value)
          }}
        />
        <button
        onClick={handleSubmit}
        className='m-15 p-4 rounded-2xl border-[0.5px] border-black w-fit h-fit text-normal bg-primary text-white text-normal font-normal hover:animate-wave'>
          Generate
          </button>
      </form>
      { showQR && <GeneratedQRCode content={userInput} /> }
      <LandingPageImages />
    </section>
  );
}

export default LandingPage;

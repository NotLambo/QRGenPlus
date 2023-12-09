import { useState } from "react";
import FaqItem from "./FaqItem";

const faqCards = [
  {
    title: 'What is a QR code?',
    description: 'A QR code is a image that contains data which leads to a specified link or address.',
    id: 1,
  },
  {
    title: 'Why use a QR code?',
    description: 'You could use a QR code too help promote your business, take users too a designated site, or even use with friends and family.',
    id: 2,
  },
  {
    title: 'How to generate?',
    description: 'You simply enter a link you want the image too redirect too, click `Generate` then as simple as that you can download and use your QR code image.',
    id: 3,
  },
]

function FaqSection() {
  const [ currentCard, setCurrentCard ] = useState(0);

  function handleCard(id) {
    setCurrentCard(id);
    if(id === currentCard) setCurrentCard(0);
  }

  return (
    <section className='flex flex-wrap items-center justify-center m-3 sm:justify-between' id="faq" data-aos="fade-in" data-aos-duration="1000">
        <div className='inline-block'>
          <h1 className='text-2xl font-semibold text-center sm:text-left'>FAQ</h1>
          {
            faqCards.map(item =>
            <FaqItem
            title={item.title}
            description={item.description}
            currentCard={currentCard}
            id={item.id}
            onCardAction={handleCard}
            key={item.id}
            />)
          }
        </div>
        <figure>
          <picture>
            <img
              className='hidden sm_plus:inline-block'
              loading="lazy"
              src='./high-quality-thumbsup.webp'
              alt='QRGenPlus Mascot Image.'
            />
          </picture>
        </figure>
    </section>
  );
}

export default FaqSection;
import { useState } from "react";
import ReviewCarouselBtn from "./ReviewCarouselBtn";

const reviewCards = [
  {
    imageSrc: './stock-review.webp',
    name: 'Eric',
    title: 'Owner of iShop.',
    description: "I have used QR Gen Plus and I find it easy too use and efficient too keep my business running.",
    alt: 'Image of Eric, he is the Founder & CEO of iShop. This picture is paired with the review.',
    id: 0
  },
  {
    imageSrc: './stock-review-2.webp',
    name: 'Yin',
    title: 'Founder & CEO of Aura Makeup.',
    description: "When it comes to business, you need a fast and efficent method of spreading you're name. QRGenPlus does just that.",
    alt: 'Image of Yin, she is the Founder & CEO of Aura Makeup. This picture is paired with the review.',
    id: 1
  },
  {
    imageSrc: './stock-review-3.webp',
    name: 'James',
    title: 'Entrepreneur.',
    description: "QRGenPlus has been a life saver when it comes to advertising both on social media and on the streets of New York.",
    alt: 'Image of James, he is a Entrepreneur. This picture is paired with the review.',
    id: 2
  },
]

function ReviewSection() {
  const [ currentImage, setCurrentImage ] = useState(0);

  function handleClick(id) {
    setCurrentImage(id);
  }
  
  return (
    <section className='p-12 border-black border-y-2 bg-accent' id="reviews" data-aos="fadeInUp" data-aos-duration="1000">
      <h1 className="text-2xl font-semibold text-center text-secondaryTextColor">What our clients think</h1>
      <div className='flex justify-center'>
        <div className='inline-flex items-center justify-center gap-12'>
          <figure>
            <picture>
              <img
              loading='lazy'
              src={reviewCards[currentImage].imageSrc}
              alt={reviewCards[currentImage].alt}
              />
            </picture>
          </figure>
              <div>
                <h2 className="transition-all text-secondaryTextColor font-extralight">
                  {reviewCards[currentImage].description}
                </h2>
                <h3 className="text-lg font-medium text-secondaryTextColor">{reviewCards[currentImage].name}</h3>
                <p className="font-light text-secondaryTextColor">{reviewCards[currentImage].title}</p>
              </div>
          </div>
        </div>
        <div className='flex items-center justify-center gap-12'>
          {
            reviewCards.map((image) =>
            <ReviewCarouselBtn
            imageID={image.id}
            currentImageState={currentImage}
            handleClick={handleClick}
            key={image.id}
            />)
          }
      </div>
    </section>
  );
}

export default ReviewSection;
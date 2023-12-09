function ReviewCarouselBtn({ imageID, currentImageState, handleClick }) {
    return (
      <figure>
        <picture>
        <svg onClick={() => handleClick(imageID)} xmlns="http://www.w3.org/2000/svg" width={imageID === currentImageState ? '32' : '24'} height={imageID === currentImageState ? '32' : '24'} viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 hover:cursor-pointer"
              aria-labelledby="svg" aria-label="review-svg" aria-hidden='false' role='img' alt='SVG Icon for changing the Review Cards.'>
                <title>Review Section Button</title>
                <desc>
                  A SVG Icon that changes the Review Cards.
                </desc>
                { imageID === currentImageState ? (
                  <><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></>
                  ) : (
                    <><circle cx="12" cy="12" r="10"></circle></>
                    )}
              </svg>
        </picture>
      </figure>
    )
}

export default ReviewCarouselBtn

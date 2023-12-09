function FaqItem({ title, description, currentCard, id, onCardAction }) {
    return (
        <div className="my-8">
          <div className='gap-12 flex flex-nowrap justify-center items-center border-b-[0.5px] border-black sm:max-w-[24rem] md:w-96'>
            <h2 className='flex-grow text-3xl'>
              {title}
            </h2>
            <figure>
              <svg onClick={() => onCardAction(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:cursor-pointer"
              aria-labelledby="svg" aria-label="arrow-svg" aria-hidden='false' role='img' alt='SVG Icon for the dropdown card for FAQ section.'>
                <title>FAQ Card Arrow</title>
                <desc>
                  A SVG Icon that relates to the Frequently Asked Questions section that enables a dropdown menu for the answer to the questions that are frequently asked.
                </desc>
                { id === currentCard ? (
                  <><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></>
                  ) : (
                    <><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></>
                    )}
              </svg>
            </figure>
          </div>
          <div>
            <p className={`${id === currentCard ? 'inline-block' : 'hidden'} text-left max-w-[20rem] text-clip`}>
                {description}
            </p>
          </div>
        </div>
    )
}

export default FaqItem

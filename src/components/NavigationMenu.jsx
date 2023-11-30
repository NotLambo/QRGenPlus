function NavigationMenu({ hamburgerMenu = false }) {
    const styles = {
        responsive: 'flex flex-col w-full items-center gap-6 p-4 list-none bg-accent sm:hidden',
        default: 'hidden sm:flex sm:items-center sm:gap-6 sm:list-none md:gap-12',
    }
    return (
            <ul className={`${hamburgerMenu ? styles.responsive : styles.default}`}>
                <li className="flex justify-center w-full border-b border-black sm:border-none">
                <a
                    className='text-2xl font-normal text-white sm:text-black decoration-none hover:border-b-4 hover:border-accent hover:cursor-pointer'
                    href="#landingpage"
                >
                    Home
                </a>
                </li>
                <li className="flex justify-center w-full border-b border-black sm:border-none">
                <a
                    className='text-2xl font-normal text-white sm:text-black decoration-none hover:border-b-4 hover:border-accent hover:cursor-pointer'
                    href="#faq"
                >
                    FAQ
                </a>
                </li>
                <li className="flex justify-center w-full border-b border-black sm:border-none">
                <a
                    className='text-2xl font-normal text-white sm:text-black decoration-none hover:border-b-4 hover:border-accent hover:cursor-pointer'
                    href="#about"
                >
                    About
                </a>
                </li>
            </ul>
    )
}

export default NavigationMenu

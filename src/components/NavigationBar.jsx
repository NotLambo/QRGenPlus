import { useState } from "react";
import NavigationMenu from "./NavigationMenu";

function NavigationBar() {
  const [ showMenu, setShowMenu ] = useState(false);
  return (
    <nav className='sticky top-0 z-50 flex flex-wrap items-center justify-between w-full h-auto p-6 bg-white'>
      <img
        className='w-auto h-5 transition-all'
        src='./qrgenplus-width-logo_sm.webp'
        alt='QRGenPlus'
        id='logo'
      />
      <img
      className='sm:hidden'
      src='./menu.svg'
      alt='Hamburger drop down menu'
      id='menu'
      onClick={() => setShowMenu(!showMenu)}
      />
      { showMenu && (
        <NavigationMenu hamburgerMenu={true} />
      ) }
      <NavigationMenu />
    </nav>
  );
}

export default NavigationBar;

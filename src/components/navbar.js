import { styles } from '../util/style'
import { navigationLinks } from '../util/constants'
import {logo, menu, close} from '../assets'
import { useState } from 'react'


const Navbar = () => {

  const [togglebtn, setTogglebtn] = useState(false)
  const [active, setActive] = useState('Home')
  
  const toggleHandler = () => setTogglebtn(prev => !prev)
  const activeHandler = id => setActive(id)

  return (
    <div className={`w-full py-2 ${styles.flexBetween}`}>
      {/* Logo */}
      <a href='/'>
        <img src={logo} alt="logo"
          className="w-[175px] h-[65px] cursor-pointer"
        />
      </a>

      {/* Navigation Link */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navigationLinks.map((nav, idx) => (
          <li key={nav.id} 
            className={`font-montserrat font-normal cursor-pointer text-[16px] text-lightWhite nav-list 
            ${idx !== navigationLinks.length - 1 ? 'mr-10' : 'mr-0'}
            ${active === nav.id ? 'text-white' : 'text-lightWhite'}
           `}
            onClick={() => activeHandler(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Navigation btn */}
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img 
          src={togglebtn ? close : menu} 
          alt="menu" 
          className="bg-white w-[30px] cursor-pointer object-contain"
          onClick={toggleHandler}
        />

        <div className={`${!togglebtn ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 left-0 my-2 w-full sidebar bg-black-gradient `}>
        <ul className='list-none flex justify-end items-center flex-1'>
          {navigationLinks.map((nav, idx) => (
            <li key={nav.id} 
              className={`font-montserrat font-normal cursor-pointer text-[16px] text-lightWhite 
                ${idx === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'}
                ${active === nav.id ? 'text-white' : 'text-lightWhite'}
                hover:text-white transition-all duration-500`}
              onClick={() => activeHandler(nav.id)}
              >
                {nav.title}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
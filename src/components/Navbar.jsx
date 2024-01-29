
import React, {useState} from 'react';
import { navmenuItems } from '../components/NavMenuItems';
import { Link } from 'react-router-dom'
import SvgComponent from './svgComponent'
import Button from './Button';

import NavItem from './NavItem';


const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => {setClick(!click)}
  const [dropdown, setDropdown] = useState(false)


  const onMouseEnter = () => {
    if (window.innerWidth < 800) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }  
  const onMouseLeave = () => {
    if (window.innerWidth < 800) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }




  return (
    <>
      <nav className="navbar">
        <Link to='/' className='navbar-logo'>
          <SvgComponent 
              width={200} 
              height={70} 
          url={process.env.PUBLIC_URL + 'Logo.svg'}
          />
        </Link>
        <div className='menu-icon'
          onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={!click ? 'nav-items' : 'nav-items active'}>
          
          {
            navmenuItems.map((navItem, index) => {
              return (
                <li 
                  className='nav-item'
                  id={'item' + index}
                  key={index}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <NavItem props={navItem} dropdown={dropdown}/>
                </li>
             
                ) 
            })
          }

        </ul>
        <Button/>
      </nav>

    </>


  );

};

export default Navbar;

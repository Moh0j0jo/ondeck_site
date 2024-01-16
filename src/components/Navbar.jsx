import { useState, useEffect } from 'react';
import '../styles/Navbar.css'
import SvgComponent from './svgComponent';
import DropDownCompItemList from './DropdownItems';


const Navbar = () => {

  const [isActivedrpd, setDropDownisActive] = useState(false);
  const [isActive, setIsActive] = useState(true);
  
  const navmenuItems = [
    {
      label: "Products",
      dropdownlist: [
        {
          logo: 'Spense_Icon.svg',
          title: 'Spense',
          text: 'Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts.',
          link: '/spense'
        },
        {
          logo: 'Fiber_Icon.svg',
          title: 'Fiber Landing Page',
          text: 'An online portfolio generator. Great to practice flex/grid layouts, and absolute positioning.',
          link: '/fiber'
        },
        {
          logo: 'Gradie_Icon.svg',
          title: 'Gradie Sign Up page',
          text: 'Gradie is a simple sign up page, great to practice centering layouts.',
          link: '/gradie'
        },
      ]
    },
    {
      label: "Challenges",
      dropdownlist: []
    },
    {
      label: "Resources",
      dropdownlist: []
    },
    {
      label: "Other Links",
      dropdownlist: []
    }
  ]

  useEffect(() => {
    const handleMouseEnter = () => {
      setDropDownisActive(true);
    };

    const handleMouseLeave = () => {
      setDropDownisActive(false);
    };

    // Attach event listeners when the component mounts
    const dropdownTrigger = document.getElementById('d0');
    dropdownTrigger.addEventListener('mouseenter', handleMouseEnter);
    dropdownTrigger.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup: Remove event listeners when the component unmounts
    // return () => {
    //   dropdownTrigger.removeEventListener('mouseenter', handleMouseEnter);
    //   dropdownTrigger.removeEventListener('mouseleave', handleMouseLeave);
    // };
  }, [isActivedrpd]);


  let dropdownClick = (e) => {
    const elementName = e.currentTarget.id

    if (elementName === 'd0') {
      setDropDownisActive(!isActivedrpd)
    }

  }

  let menubtnClick = (e) => {

    setIsActive(!isActive);

  }

  const NavMenuItem = ({ navmenuItems }) => {

    let itemClassname = isActivedrpd ? 'product-dropdown active' : 'product-dropdown'
    
    return (

      navmenuItems.map((navItem, index) => {

        return (
          <div className="nav-menu-item"
            key={index}
            id={'d' + index}
            onClick={dropdownClick}
          >
            <h4>{navItem.label}</h4>
           
           
              {(
                navItem.dropdownlist.length > 0 &&
                <DropDownCompItemList items={navItem.dropdownlist} className={itemClassname}
                />
              )}
            


          </div>
        )

      })
    )
  }

  const Navmenu = () => {
    return (
      <div className={isActive ? "nav-menu" : "nav-menu active"}>
        <NavMenuItem navmenuItems={navmenuItems} />
        <button
          className='closeBtn'
          onClick={menubtnClick}
        >
        </button>
      </div>
    )

  }


  return (
    <div className="navbar">
      <div className="logo">
        <SvgComponent
          width={100}
          height={40}
          url={process.env.PUBLIC_URL + 'Logo.svg'}
        />
      </div>
      <div className="burgermenu" onClick={menubtnClick}></div>
      <Navmenu />
      <button className='signInBtn'>Try for Free</button>
    </div>
  );
};

export default Navbar;

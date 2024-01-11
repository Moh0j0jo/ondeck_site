import { useState } from 'react';
import '../styles/Navbar.css'
import Button from './Button';
import SvgComponent from './svgComponent';

const Navbar = () => {
  
  const isMobile = window.innerWidth <= 700;
  // const [isActive, setIsActive] = useState(false)

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

  const Navmenu = () => {

    return (
      <div className="nav-menu active">
        {navmenuItems.map((navItem, index) => {

          return (
            <div className="nav-menu-item" key={index}>
              {navItem.label}
              {navItem.dropdownlist.length > 0 && (
                <div className='product-dropdown active'>
                  {navItem.dropdownlist.map((dropdownItem, index) => {

                    return (
                      <div className="product-dropdown-item" key={index}>
                        <div className="product-item-header">
                          <SvgComponent
                            width={20}
                            height={20}
                            url={process.env.PUBLIC_URL + dropdownItem.logo}
                          />
                          <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer">
                            {dropdownItem.title}
                          </a>
                        </div>
                        <p>{dropdownItem.text}</p>
                      </div>
                    )

                  })}
                </div>
              )}
            </div>
          )

        })
        }
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
      <div className="burgermenu"></div>
      <Navmenu />
      {
        isMobile ?
        <Button text="Try For free" isVisible={false} /> :
        <Button text="Try For free" isVisibleOnMobile={true} />
      }
    </div>
  );
};

export default Navbar;

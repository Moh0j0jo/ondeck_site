import { useState } from 'react';
import '../styles/Navbar.css'
import SvgComponent from './svgComponent';


const Navbar = () => {
  
  const [isActivedrpd, setDropDownisActive] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isHovered, setHovered] = useState(false);

  let dropdownClick = (e) =>{
    const elementName = e.currentTarget.id

    if (elementName === 'd0') {
      setDropDownisActive(!isActivedrpd)
    }
  }

  let menubtnClick = (e) =>{

      setIsActive(!isActive);

  }

  const mouseEnter = (e) => {
    const elementName = e.currentTarget.id
    const isWebView =  window.innerWidth > 600
    if(isWebView) {    
      if (elementName === 'd0') {
        setHovered(true);
      }
    }
  };


  const mouseLeave = (e) => {
    const elementName = e.currentTarget.id
    if (elementName !== 'd0') {
      setHovered(false);
    }
    console.log(elementName)

  };

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
      <div className={isActive ? "nav-menu" : "nav-menu active"}>
        {
          navmenuItems.map((navItem, index) => {

            return (
              <div className="nav-menu-item" 
                key={index} 
                id={'d'+index}
                onClick={dropdownClick}
                onMouseEnter={mouseEnter} 
                onMouseLeave={mouseLeave}
               
              >
                {navItem.label}
                {navItem.dropdownlist.length > 0 && (
                  <div className={
                    isActivedrpd || isHovered ? 'product-dropdown active':'product-dropdown'
                    }
                  onMouseEnter={mouseEnter} 
                  onMouseLeave={mouseLeave}
                  >
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

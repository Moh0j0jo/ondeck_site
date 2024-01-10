import '../styles/Navbar.css'
import Button from './Button';
import SvgComponent from './svgComponent';

const Navbar = () => {
 
  const isMobile = window.innerWidth <= 700;

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
      <div className="nav-menu">
        <div className="nav-menu-item">Products
          <div className="product-dropdown">
            <div className="product-dropdown-item">
            <div className="product-item-header">
            <SvgComponent 
              width={20} 
              height={20} 
              url={process.env.PUBLIC_URL + 'Spense_Icon.svg'}
            />
              <a href="http://" target="_blank" rel="noopener noreferrer">Spense</a>
            </div>

              <p>Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts.</p>
            </div>
            <div className="product-dropdown-item">
              <div className="product-item-header">
                <SvgComponent 
                  width={20} 
                  height={20} 
                  url={process.env.PUBLIC_URL + 'Fiber_Icon.svg'}
                />
                  <a href="http://" target="_blank" rel="noopener noreferrer">Fiber Landing Page</a>
              </div>
              <p>An online portfolio generator. Great to practice flex/grid layouts, and absolute positioning.</p>
            </div>
            <div className="product-dropdown-item">
              <div className="product-item-header">
                <SvgComponent 
                  width={20} 
                  height={20} 
                  url={process.env.PUBLIC_URL + 'Gradie_Icon.svg'}
                />
                  <a href="http://" target="_blank" rel="noopener noreferrer">Gradie Sign Up page</a>
              </div>
              <p>
              Gradie is a simple sign up page, great to practice centering layouts.
              </p>
            </div>

          </div>
        </div>
        <div className="nav-menu-item">Challenges</div>
        <div className="nav-menu-item">Resources</div>
        <div className="nav-menu-item">Other Links</div>
      </div>
      {
        isMobile ?
        <Button text="Try For free" isVisibleOnMobile={false} /> :
        <Button text="Try For free" isVisibleOnMobile={true} />
      }

    </div>
   );
}
 
export default Navbar;
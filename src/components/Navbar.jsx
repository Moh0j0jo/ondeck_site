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
        <div className="products">Products
          <div className="producst-dropdown">
          <a href="http://" target="_blank" rel="noopener noreferrer">Spense</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Fiber Landing Page</a>
            <a href="http://" target="_blank" rel="noopener noreferrer">Gradie Sign Up Page</a>
          </div>
        </div>
        <div className="challenges">Challenges</div>
        <div className="resources">Resources</div>
        <div className="otherlinks">Other Links</div>
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
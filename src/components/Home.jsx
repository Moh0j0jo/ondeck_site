import '../styles/Home.css'
import Button from './Button';
import SvgComponent from './svgComponent';


const Home = () => {


  
  return ( 
    <div className="home-wrapper">

    <section className="upper">
      <div className="home-wrapper-left">
        <h1>Ondeck is your remote  <span>conference calling tool</span></h1>
        <p>Ondeck is a service that allows your to create a beatiful online, and encrypted video calls for you and your remote team.</p>
        <div className="rating-container">
      <Button text="Try for free" isVisibleOnMobile={true} />
      <div className="reviews-wrapper">
      <p className='rating'>5.0 Rating based on reviews from: 
        <span>
          <SvgComponent 
            width={24} 
            height={24} 
            url={process.env.PUBLIC_URL + 'Capterra Logo.svg'}
          />
          <SvgComponent 
            width={24} 
            height={24} 
            url={process.env.PUBLIC_URL + 'AlternativeTo Logo.svg'}
          />
          <SvgComponent 
            width={24} 
            height={24} 
            url={process.env.PUBLIC_URL + 'shopify.svg'}
          />
        </span>
      </p>
      </div>
    </div>
      </div>
      <div className="home-rapper-right">
      <aside>
        <img src={process.env.PUBLIC_URL + 'Hero Image.png'} alt="xxx" />
      </aside>
      </div>
    </section>



    <section className="lower">
      <p>Trusted by 3+ million people at companies like</p>
      <div className="logos">
        <SvgComponent 
              width={100} 
              height={50} 
              url={process.env.PUBLIC_URL + 'Netflix Logo.svg'}
        />

        <SvgComponent 
              width={100} 
              height={50} 
              url={process.env.PUBLIC_URL + 'Shopify Logo.svg'}
        />

        <SvgComponent 
              width={100} 
              height={50} 
              url={process.env.PUBLIC_URL + 'Spotify Logo.svg'}
        />

        <SvgComponent 
              width={100} 
              height={50} 
              url={process.env.PUBLIC_URL + 'Walmart Logo.svg'}
        />
      </div>
    </section>
    </div>
   );
}
 
export default Home;
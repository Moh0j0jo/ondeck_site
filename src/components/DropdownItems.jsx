import SvgComponent from './svgComponent';


const DropDownCompItemList = ({ items, className}) => {


  return ( 
      <div className={className}>
      {items.map((prop, index) => {
        return (
          <div className="product-dropdown-item" key={index}>
            <div className="product-item-header">
              <SvgComponent
                width={20}
                height={20}
                url={process.env.PUBLIC_URL + prop.logo}
              />
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer">
                {prop.title}
              </a>
            </div>
            <p>{prop.text}</p>
          </div>
        )
      })
      }
    </div>
   );
}
 
export default DropDownCompItemList;
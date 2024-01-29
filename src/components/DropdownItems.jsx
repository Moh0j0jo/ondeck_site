import SvgComponent from './svgComponent';
import React, {useState} from 'react'

export function DropDownCompItemList({ props }) {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return ( 
    
      <ul 
        className={click ? 'dropdown-list clicked' : 'dropdown-list'}
        onClick={handleClick}>
      {props.map((prop, index) => {
        return (
          <div className={'product-dropdown-item'} key={index}>
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
    </ul>
   );
}
 
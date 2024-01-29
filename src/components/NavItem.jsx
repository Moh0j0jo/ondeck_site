import { DropDownCompItemList } from './DropdownItems'
import { Link } from 'react-router-dom'

const NavItem = ({props, dropdown}) => {

  const RenderSubmenu = () =>{
     
        return(<DropDownCompItemList props={props.dropdownlist}/>)
  }

  return (
    <>
      <Link
        className='nav-link'
        to={'/' + props.label.toLowerCase()}
      >
        {props.label}
      </Link>
       {dropdown && <RenderSubmenu/>
      }

      
    </>

  );
}

export default NavItem;
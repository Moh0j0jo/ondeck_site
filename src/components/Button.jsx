import {Link} from 'react-router-dom'

const Button = () => {
  return ( 
    <>
      <Link to='sign-up'>
      <button className="btn">Try for free</button>
    </Link>
    </>
   );
}
 
export default Button;
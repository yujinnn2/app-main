import {Link} from 'react-router-dom';
import '../styles/navbar.css'

function Navbar(){
  return(
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">ABOUT</Link></li>
        <li><Link to="Contact">CONTACT</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;






// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav style={{ padding: '1rem', background: '#ddd' }}>
//       <Link to="/">Home</Link> |{' '}
//       <Link to="/products">Products</Link> |{' '}
//       <Link to="/cart">Cart</Link> |{' '}
//       <Link to="/contact">Contact</Link>
//     </nav>
//   );
// }

// export default Navbar;
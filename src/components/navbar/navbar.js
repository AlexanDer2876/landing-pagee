import './navbar.css'
import logo from '../../logo.png'

function Navbar() {
  return (
        <div className="nav">
          <div className="ul1">
            <ul>
              <li><img src={logo} className='logo' /></li>
              <li>Product</li>
              <li>Use Cases</li>
            </ul>
          </div>
          <div className="ul2">
            <ul>
              <li>Pricing</li>
              <li>Resources</li>
              <li><button>Get Started</button></li>
            </ul>
          </div>
        </div> 

        )

  };
export default Navbar;


import './App.css'
import image1 from './Imagen-ejemplo1.png';
import logo1 from './cohete.svg';
import logo2 from './credit.svg';
import logo from './logo.png'

function App() {
  return (
    <div className="App">
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
        <div className="container">
          <h1>Everything you need to grow<br />your business</h1>
          <h6>Protonn does everything you need to start and grow your business.Attract clients through<br />engaging video content and simplify your business operations</h6>
          <button>Get Started With Protton Today</button>
        </div>
        <div className="parrafo">
          <div className='log2'>
                <img src={logo2} className='svg2'/>
                <p className='text'>No Credit Card needed</p>
          </div>      
          <div className='log1'>
                <img src={logo1} className='svg1'/>
                <p className='text'>Free 3-month trial</p>
        </div>        
        </div>
              <img src={image1} className="img1" />
    </div>
  )

  };
export default App;


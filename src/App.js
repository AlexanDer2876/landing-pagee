import './App.css'
import image1 from './Imagen-ejemplo1.png';
import Navbar from './components/navbar/navbar';
import Parrafo from './components/navbar/parrafo';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>        
        <div className="container">
          <h1>Everything you need to grow<br />your business</h1>
          <h6>Protonn does everything you need to start and grow your business.Attract clients through<br />engaging video content and simplify your business operations</h6>
          <button>Get Started With Protton Today</button>
        </div>
      <Parrafo></Parrafo>
        
      <img src={image1} className="img1" />
    </div>
  )

  };
export default App;


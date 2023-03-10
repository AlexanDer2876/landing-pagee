import logo1 from '../../cohete.svg';
import logo2 from '../../credit.svg';
import './parrafo.css'

function Parrafo () {
    return (
     
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
    )
};
export default Parrafo;        

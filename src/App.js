import './App.css';
import {ReactComponent as Suv} from './images/icon-suvs.svg';
import {ReactComponent as Sedan} from './images/icon-sedans.svg';
import {ReactComponent as Luxury} from './images/icon-luxury.svg';

function App() {
  return (
    <div className="wrapper">
        <div className="outerBox">
      <div className="firstElement element ">
        <Sedan className="image"/>
        <h1 className="header">SEDANS</h1>
        <p className="paragraph">
          Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
          or on your next road trip.
        </p>
        <button className="btn btn1">Learn More</button>
      </div>
      <div className="secondElement element">
       <Suv className="image" />
       <h1 className="header">SUV</h1>
       <p className="paragraph">
        Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
        and off-road adventures.
        </p>
        <button className="btn btn2">Learn More</button>
      </div>
      <div className="thirdElement element ">
        <Luxury className="image" />
       <h1 className="header">LUXURY</h1>
       <p className="paragraph">
        Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
        rental and arrive in style.
        </p>
        <button className="btn btn3">Learn More</button>
      </div>
    </div>
    </div>
    
  );
}

export default App;

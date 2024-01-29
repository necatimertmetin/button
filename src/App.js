import './App.css';
import flower1 from './assets/flower1.png';
import flower2 from './assets/flower2.png';
import flower3 from './assets/flower3.png';
import flower4 from './assets/flower4.png';
import flower5 from './assets/flower5.png';
function App() {
  return (
    <div className="App">
      <button className="button">
        <span>Greenpeace</span>
        <div className='background'/>
        
        <img className='flower flower-1' src={flower1}/>
        <img className='flower flower-2' src={flower2}/>
        <img className='flower flower-3' src={flower3}/>
        <img className='flower flower-4' src={flower4}/>
        <img className='flower flower-5' src={flower5}/>
        <img className='flower flower-6' src={flower1}/>
        <img className='flower flower-7' src={flower2}/>
        <img className='flower flower-8' src={flower3}/>
        <img className='flower flower-9' src={flower4}/>
        <img className='flower flower-10' src={flower5}/>
        
      </button>
    </div>
  );
}

export default App;

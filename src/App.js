import './App.css';
import Consulting from './Components/Consulting';
import Contact from './Components/Contact';
import FQA from './Components/FQA';
import Navbar from './Components/Navbar';
import Network from './Components/Network';
import Services from './Components/Services';

function App() {
  return (
    <div className='Full'>
      <Navbar />
      <Consulting />
      <Services />
      <Network />
      <FQA />
      <Contact />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Information from './Components/Information/Information';
// import Features from './Components/Features/Features';


function App() {
  return (
    <>
      <div className="mainapp">
        <Navbar />
        <Home />
        <Information />
      </div>
    </>
  );
}

export default App;

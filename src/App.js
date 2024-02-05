import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Information from './Components/Information/Information';
// import Features from './Components/Features/Features';
import {
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
      <Switch>
        <Route path='/invite' component={() => {
          window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1106094873951621120&permissions=8&scope=applications.commands%20bot";
        }} />
        <Route path='/support' component={() => {
          window.location.href = "https://discord.gg/aware";
        }} />
      </Switch>
      <div className="mainapp">
        <Navbar />
        <Home />
        <Information />
      </div>
    </>
  );
}

export default App;

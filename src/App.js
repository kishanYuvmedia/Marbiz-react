import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import { Button, Card, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Featured from './Components/Featured';



function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Featured />
    </div>
  );
}

export default App;

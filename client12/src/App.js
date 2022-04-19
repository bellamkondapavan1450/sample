import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route path="/rooms" element={<Rooms/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

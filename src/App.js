
import './App.css';
import Login from './Components/login';
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
   <>

<Router>
  <div className="container">
  <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
  </Routes>
  </div>
</Router>
   </>
  );
}

export default App;

import './App.css';
import Routes from './components/Routes'
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    	<Router>
      		<Navbar/>
      		<Routes/>
      	</Router>
    </div>
  );
}

export default App;
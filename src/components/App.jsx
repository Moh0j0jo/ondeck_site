import '../styles/App.css'
import Navbar from './Navbar';
import Home from './Home';
const App = () => {
  return (
    <div className="appwrapper">
      <Navbar/>
      <Home/>
    </div>
  );
}
 
export default App;
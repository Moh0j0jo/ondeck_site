import React from 'react';
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Challenges from './components/pages/Challenges';
import Resources from './components/pages/Resources';
import OtherLinks from './components/pages/OtherLinks';

import './styles/App.css'




const App = () => {
  return ( 
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/challenges' element={<Challenges />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/other-links' element={<OtherLinks />} />
    </Routes>
  </Router>

   );
}
 
export default App;

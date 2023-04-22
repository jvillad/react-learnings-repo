import './App.css';
import Machines from './components/Machines';
import About from './components/about/About';
import Nav from './components/common/Nav';
import PageNotFound from './components/common/PageNotFound';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Items from './components/Items';

import About from './components/about/About';
import Nav from './components/common/Nav';
import PageNotFound from './components/common/PageNotFound';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-stone-900 h-screen text-white">
      <BrowserRouter>
        <div className="mb-20">
          <Nav />
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

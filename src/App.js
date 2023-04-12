import './App.css';
import Header from './components/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {


  return (
    <>

      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;

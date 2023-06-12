import './App.css';
import Header from './components/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { useRef } from 'react';
import Details from './components/Details';

function App() {
  const mainDish = useRef(null);
  const sideDish = useRef(null);
  const dessert = useRef(null);
  const drink = useRef(null);
  

  

  const scrollTosection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const scrollTosection1 = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const scrollTosection2 = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const scrollTosection3 = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <HashRouter>
        <Header scrollTosection={() => scrollTosection(mainDish)} scrollTosection1={() => scrollTosection1(sideDish)} scrollTosection2={() => scrollTosection2(dessert)} scrollTosection3={() => scrollTosection3(drink)}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu sideDish={sideDish} mainDish={mainDish} dessert={dessert} drink={drink} />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;

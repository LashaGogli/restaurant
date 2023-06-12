import './App.css';
import Header from './components/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { useRef, useState } from 'react';
import Details from './components/Details';

function App() {
  const mainDish = useRef(null);
  const sideDish = useRef(null);
  const dessert = useRef(null);
  const drink = useRef(null);

  const [cartitems, setCartitems] = useState([]);

  const onAdd = (product) => {
    const exist = cartitems.find((x) => x.id === product.id);
    if (exist) {
      setCartitems(
        cartitems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartitems([...cartitems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartitems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartitems(cartitems.filter((x) => x.id !== product.id));
    } else {
      setCartitems(
        cartitems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

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
        <Header
          countCartItems={cartitems.length}
          scrollTosection={() => scrollTosection(mainDish)}
          scrollTosection1={() => scrollTosection1(sideDish)}
          scrollTosection2={() => scrollTosection2(dessert)}
          scrollTosection3={() => scrollTosection3(drink)}
        />

        <Routes>
          <Route path="/" element={<Home onAdd={onAdd} />} />
          <Route
            path="/menu"
            element={
              <Menu
                onAdd={onAdd}
                sideDish={sideDish}
                mainDish={mainDish}
                dessert={dessert}
                drink={drink}
              />
            }
          />
          <Route path="/contactus" element={<Contact />} />
          <Route
            path="/cart"
            element={<Cart onRemove={onRemove} onAdd={onAdd} cartitems={cartitems} />}
          />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;

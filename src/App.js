import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider, useCart } from './components/CartContext';

const Header = () => {
  const { cartItemsCount } = useCart();

  return (
    <header style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyleType: "none", display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 10px' }}><Link to="/">Home</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/store">Store</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/about">About</Link></li>
        </ul>
        <Link to="/cart" style={{ marginLeft: 'auto', cursor: 'pointer' }}>Cart ({cartItemsCount})</Link>
      </nav>
    </header>
  );
};

const Product = ({ title, price, imageUrl }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ margin: '20px' }}>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} style={{ width: '200px', height: '200px' }} />
      <p>Price: ${price}</p>
      <button onClick={() => addToCart({ title, price, imageUrl })}>Add to Cart</button>
    </div>
  );
};

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, backgroundColor: 'white', border: '1px solid black', padding: '10px', zIndex: 999, }}>
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={item.imageUrl} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <div>
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Footer = () => (
  <footer style={{ backgroundColor: 'blue', color: 'white', paddingTop:'50px', textAlign: 'center' }}>
    <div>
      <img src="data:image/png;base64,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" alt="YouTube" style={{maxWidth:'50px' }} />
      <img src="data:image/png;base64,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" alt="Spotify" style={{ maxWidth: '45px' ,paddingLeft:'10px'}} />
      <img src="data:image/jpeg;base64,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" alt="Facebook" style={{ maxWidth:'45px',paddingLeft:'10px' }} />
    </div>
  </footer>
);

const ProductList = () => {
  const products = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

const AboutUs = () => (
  <div>
    <h2>About Us</h2>
    <p>This is the about page content.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/store" element={<ProductList />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;


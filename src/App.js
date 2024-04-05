import React from 'react';
import { CartProvider, useCart } from './components/CartContext';

const Header = () => {
  const { cartItemsCount } = useCart();

  return (
    <header style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ listStyleType: "none", display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 10px' }}>Home</li>
          <li style={{ margin: '0 10px' }}>Store</li>
          <li style={{ margin: '0 10px' }}>About</li>
        </ul>
        <span style={{ marginLeft: 'auto', cursor: 'pointer' }}>Cart ({cartItemsCount})</span>
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
  <footer style={{ backgroundColor: 'blue', color: 'white', padding: '10px', textAlign: 'center' }}>
    <div>
      <img src="youtube_logo_url" alt="YouTube" style={{ margin: '0 10px' }} />
      <img src="spotify_logo_url" alt="Spotify" style={{ margin: '0 10px' }} />
      <img src="facebook_logo_url" alt="Facebook" style={{ margin: '0 10px' }} />
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

const App = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        <ProductList />
        <Cart />
        <button style={{ margin: '20px auto', display: 'block' }}>See Cart</button>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;


 
   
        

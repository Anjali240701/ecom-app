import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';

const Header = ({ cartItemsCount, toggleCart }) => (
  <header style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
      <ul style={{ listStyleType: "none", display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px' }}>Home</li>
        <li style={{ margin: '0 10px' }}>Store</li>
        <li style={{ margin: '0 10px' }}>About</li>
      </ul>
      <span style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={toggleCart}>Cart ({cartItemsCount})</span>
    </nav>
  </header>
);

const Product = ({ title, price, imageUrl, addToCart }) => (
  <div style={{ margin: '20px' }}>
    <h2>{title}</h2>
    <img src={imageUrl} alt={title} style={{ width: '200px', height: '200px' }} />
    <p>Price: ${price}</p>
    <button onClick={addToCart}>Add to Cart</button>
  </div>
);

const Cart = ({ cartElements, removeFromCart }) => (
  <div style={{ position: 'fixed', top: 0, right: 0, backgroundColor: 'white', border: '1px solid black', padding: '10px', zIndex: 999, }}>
    <h2>Cart</h2>
    {cartElements.map((element, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src={element.imageUrl} alt={element.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <div>
          <p>{element.title}</p>
          <p>Price: ${element.price}</p>
          <p>Quantity: {element.quantity}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      </div>
    ))}
  </div>
);

const Footer = () => (
  <footer style={{ backgroundColor: 'blue', color: 'white', padding: '10px', textAlign: 'center' }}>
    <div>
      <img src="youtube_logo_url" alt="YouTube" style={{ margin: '0 10px' }} />
      <img src="spotify_logo_url" alt="Spotify" style={{ margin: '0 10px' }} />
      <img src="facebook_logo_url" alt="Facebook" style={{ margin: '0 10px' }} />
    </div>
  </footer>
);

const App = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [showCart, setShowCart] = useState(false); // State to control cart visibility

  const cartElements = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ];

  const addToCart = () => {
    setCartItemsCount(cartItemsCount + 1);
  };

  const removeFromCart = (index) => {
    const updatedCartElements = [...cartElements];
    updatedCartElements.splice(index, 1);
    // You might need to update the cartItemsCount here as well if you're managing it separately
    // Update cartItemsCount accordingly based on the removed item
    // Example: setCartItemsCount(cartItemsCount - updatedCartElements[index].quantity);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Header cartItemsCount={cartItemsCount} toggleCart={toggleCart} />
      <h1 style={{backgroundColor:'gray' ,padding:'50px',paddingLeft:'550px'}}>The Generics</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {cartElements.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
      {showCart && <Cart cartElements={cartElements} removeFromCart={removeFromCart} />}
      <button style={{ margin: '20px auto', display: 'block' }}>See Cart</button>
      
      <Footer />
    </div>
  );
};

export default App;

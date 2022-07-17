import { useState } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = producto => {
    setCarrito([...carrito])
  }

  
  return <Component {...pageProps} 
    carrito={carrito}
  
  />
}

export default MyApp

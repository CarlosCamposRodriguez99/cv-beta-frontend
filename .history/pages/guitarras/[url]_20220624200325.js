import { useState } from 'react';
import Image from 'next/image'
import styles from '../../styles/Guitarra.module.css'
import Layout from '../../components/Layout'

const Producto = ({guitarra, agregarCarrito}) => {

  const [cantidad, setCantidad] = useState(1);

  const {descripcion, imagen, nombre, precio, id} = guitarra[0]

  const handleSubmit = (e) => {
    e.preventDefault();

    if(cantidad < 1) {

    }

    //Agregarlo al carrito
    const guitarraSeleccionada = {
      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad
    };

    agregarCarrito(guitarraSeleccionada);
  };



  return (
    <Layout
        pagina={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image layout='responsive' width={200} height={100} src={imagen.url} alt={`Imagen Guitarra ${nombre}`} />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {

  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
  const respuesta = await fetch(urlGuitarra)
  const guitarra = await respuesta.json()

  return {
    props: {
      guitarra

    }
  }
}

export default Producto;

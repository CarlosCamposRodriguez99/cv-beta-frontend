import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Guitarra.module.css';

const Guitarra = ({guitarra}) => {

  const { descripcion, imagen, nombre,  url } = guitarra


  return (
    <div className={styles.guitarra}>
      <Image priority="true" layout="responsive" width={150} height={200} src={imagen.url} alt={`Imagen Guitarra ${nombre}`} />
    
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
              Ver Producto
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra

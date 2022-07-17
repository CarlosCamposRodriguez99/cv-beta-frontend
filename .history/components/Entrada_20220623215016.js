import Link from 'next/link'
import Image from 'next/image'
import { formatearFecha } from '../helpers'
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
  const { titulo, video, published_at, url, resumen } = entrada;

  return (
    <article>

      <Image priority="true" width={100} height={200} src={video.url} alt={`imagen blog ${titulo}`}/>

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.enlace}>
            Leer Post
          </a>
        
        </Link>
      </div>
      
    </article>
  )
}

export default Entrada

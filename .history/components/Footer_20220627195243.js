import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
          <nav className={styles.navegacion}>
            <Link href="/">
              <a>
                <Image layout='fixed' width={40} height={40} src="/img/home.jpg" alt='home' />
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <Image layout='fixed' width={40} height={40} src="/img/tarea.png" alt='tareas' />
              </a>
            </Link>
            <Link href="/lenguajes">
              <a>
                <Image layout='fixed' width={60} height={60} src="/img/cap.png" alt='cap' />
              </a>
            </Link>
          </nav>

          
          <ul className={styles.ul}>
            <li className={styles.list}>
              <Link>
                <a
                  className={styles.iconoInsta}
                  href="https://www.instagram.com/"
                  
                ></a>
              
              </Link>
              
              <a 
                className={styles.iconoFace}
                href="https://www.facebook.com/"
              ></a>
              <a 
                className={styles.iconoWhats}
                href="https://web.whatsapp.com/"
              ></a>
              <a 
                className={styles.iconoLinke}
              ></a>
            </li>
          </ul>
          
      </div>
    </footer>
  )
}

export default Footer;

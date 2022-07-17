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
              <Link
                href="https://www.instagram.com/"
                className={styles.iconoInsta}
              >
                <a
                  className={styles.iconoInsta_a:hover}
                  target='_blank'
                >
                </a>
              </Link>

              <Link
                href="https://www.facebook.com/"
              >
                <a 
                  className={styles.iconoFace}
                  target='_blank'
                >
                </a>
              </Link>

              <Link
                href="https://web.whatsapp.com/"
              >
                <a 
                  className={styles.iconoWhats}
                  target='_blank'
                ></a>
              </Link>

              <Link
                href="https://www.linkedin.com/"
              >
                <a 
                  className={styles.iconoLinke}
                  target='_blank'
                ></a>
              </Link>
              
            </li>
          </ul>
          
      </div>
    </footer>
  )
}

export default Footer;

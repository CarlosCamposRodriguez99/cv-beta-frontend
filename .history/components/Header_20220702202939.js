import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from "../styles/Header.module.css"

const Header = ({guitarra}) => {
  const router = useRouter()
  return (
      <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a><Image 
              width={100} 
              height={100} 
              src="/img/logo3.png"
              layout='fixed' 
              alt="Imagen logo" />
            </a>
          </Link>
  

          <nav className={styles.navegacion}>
            <Link href="/">
              <a>
                <Image layout='fixed' width={40} height={40} src="/img/home.jpg" alt='home' />
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <Image layout='fixed' width={40} height={40} src="/img/tarea.png" alt='github' />
              </a>
            </Link>
            <Link href="/lenguajes">
              <a>
                <Image layout='fixed' width={60} height={57} src="/img/cap.png" alt='cap' />
              </a>
            </Link>
            
          </nav>
        </div>

        {guitarra && (
          <div className={styles.modelo}>
            <h1>Luis Campos Developer</h1>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a className={styles.enlace}>
                  Ver Enlace
              </a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === '/' && (
        <div className={styles.guitarra}>
          <Image layout='fixed' width={500} height={1200} src='/img/' alt='imagen bg' />
        </div>
      )}


      </header>
  )
}

export default Header;

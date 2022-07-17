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
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/lenguajes">
              <a>
                <Image layout='fixed' width={30} height={25} src/>
              </a>
            Lenguajes</Link>
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

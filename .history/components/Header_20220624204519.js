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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>

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

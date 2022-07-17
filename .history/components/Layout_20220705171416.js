import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
      <Head>
        <title>Portafolio- {pagina}</title>
        <meta name="description" content="Sitio web Portafolio"/>
        Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
      </Head>

      <Header 
        guitarra={guitarra}
      />

      {children}

      <Footer />
      
    </div>
  )
}

Layout.defaultProps = {
  guitarra: null
}

export default Layout;

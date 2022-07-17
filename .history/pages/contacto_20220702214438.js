import Layout from "../components/Layout";
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css';


const Contacto = () => {
  return (
    <Layout
      pagina='Contacto'
    >
      <main className="contenedor">
        <h1 className="heading">Contacto</h1>

        <div>

          <Image layout="responsive" width={600} height={450} src={"/img/nosotros.jpg"} alt="Imagen undraw" />

          <div>

          </div>
        </div>

      </main>
    </Layout>
  )
}

export default Contacto;
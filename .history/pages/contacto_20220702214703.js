import Layout from "../components/Layout";
import Image from 'next/image';
import styles from '../styles/Contacto.module.css';


const Contacto = () => {
  return (
    <Layout
      pagina='Contacto'
    >
      <main className="contenedor">
        <h1 className="heading">Contacto</h1>

        <div className={styles.contenido}>

          <Image layout="responsive" width={600} height={450} src={"/img/undraw_join_re_w1lh.svg"} alt="imagen undraw" />

          <div>

          </div>
        </div>

      </main>
    </Layout>
  )
}

export default Contacto;
import Layout from "../components/Layout";
import Image from 'next/image';
import styles from '../styles/Contacto.module.css';

const Campos = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 3fr;
  font-size: 2rem;
  margin: 0 auto;
  border-radius: 2rem;
  background-color: #75AB00;
  padding: 2rem;
  color: #FFF;
  text-align: center;
  font-family: 'Lato', sans-serif;
  p {
    font-family: 'Lato', sans-serif;
  }
  @media(min-width: 820px) {
    font-family: 'Lato', sans-serif;
    display: flex;
    flex: 1;
    max-width: 820px;
    flex-direction: column;
    margin: 2rem auto 0 auto;
    font-size: 2.2rem;
    width: 100%;
    padding: 1rem auto 1rem 0;
  }
  @media(min-width: 200px) {
    font-family: 'Lato', sans-serif;
    max-width: 200px;
    margin: 2rem auto 0 auto;
    font-size: 2rem;
    width: 100%;
    padding: 2rem auto;
  }
  @media(min-width: 360px) {
    font-family: 'Lato', sans-serif;
    max-width: 360px;
    margin: 2rem 0 auto auto;
    font-size: 2rem;
    width: 100%;
    padding: 2rem 0;
  }
  @media(min-width: 400px) {
    font-family: 'Lato', sans-serif;
    max-width: 400px;
    margin: 3rem 0;
    font-size: 2rem;
    width: 100%;
    padding: 2rem 0;
  }
  @media(min-width: 500px) {
    font-family: 'Lato', sans-serif;
    max-width: 500px;
    margin: 2rem 0;
    font-size: 2rem;
    width: 100%;
    padding: 2rem 0;
  }
  @media(min-width: 600px) {
    font-family: 'Lato', sans-serif;
    max-width: 600px;
    margin: 2rem 0;
    font-size: 2rem;
    width: 100%;
    padding: 2rem 0;
  }
  @media(min-width: 1000px) {
    font-family: 'Lato', sans-serif;
    max-width: 1000px;
    margin: 2rem 0;
    font-size: 2rem;
    width: 100%;
    padding: 2rem 0;
  }
`;



const Contacto = () => {
  return (
    <Layout
      pagina='Contacto'
    >
      <main className="contenedor">
        <h1 className="heading">Contacto</h1>

        <div className={styles.contenido}>

          <Image layout="responsive" width={600} height={450} src={"/img/undraw_join_re_w1lh.svg"} alt="imagen undraw" />

          <Campos>
            <p> Cel: 3331308335</p>
            <p> Email: lacamposrz@gmail.com</p>

          </div>
        </div>

      </main>
    </Layout>
  )
}

export default Contacto;
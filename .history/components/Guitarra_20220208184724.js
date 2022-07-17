import Image from 'next/image'
import Link from 'next/link'

const Guitarra = ({guitarra}) => {

  const { descripcion, imagen, nombre, precio, url } = guitarra


  return (
    <div>
      <Image layout='responsive' width={200} height={2150} src={imagen.url} alt={`Imagen Guitarra ${nombre}`} />
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
      
    </div>
  )
}

export default Guitarra

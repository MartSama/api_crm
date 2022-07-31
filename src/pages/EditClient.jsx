import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'

const EditClient = () => {
  const params = useParams();
  const { id } = params;
  const [client, setClient] = useState({});

  useEffect(() => {
    try {
      const getApiResult = async () => {
        const url = `http://localhost:4000/clientes/${id}`;
        const answerFetch = await fetch(url);
        const resultFetch = await answerFetch.json();
        setClient(resultFetch);
      }
      getApiResult();
    } catch (error) {
      console.log(error)
    }
  }, []);
  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Actualizar perfil</h1>
      <p className="mt-3 mb-5 text-lg">
        Mira de manera detallada los datos del perfil
      </p>

      {client?.nombre 
        ?
          (<Formulario client={client} />)
        :
          <Error>
            Cliente inválido, intenta con otro
          </Error>
      }

    </div>
  )
}

export default EditClient
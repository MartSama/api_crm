import { useState, useEffect } from "react"
import Client from "../components/Client";
const MainPage = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClientesApi = async () => {
      try {
        const url = 'http://localhost:4000/clientes';
        const answerFetch = await fetch(url);
        const resultFetch = await answerFetch.json();
        setClients(resultFetch);
      } catch (error) {

      }
    }
    getClientesApi();
  }, [])

  const handleEliminar = async (id) => {

    try {
      const url = `http://localhost:4000/clientes/${id}`;
      const answerFetch = await fetch(url, {
        method: 'DELETE'
      })
      await answerFetch.json();
      const arrayNonDelete = clients.filter((element) => element.id !== id);
      setClients(arrayNonDelete);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3 text-lg">
        Administra tus clientes
      </p>

      <table className="w-full mt-5 table-auto shadow-md bg-white text-center">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((currentElement) => (
            <Client
              key={currentElement.id}
              client={currentElement}
              handleEliminar={handleEliminar}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default MainPage
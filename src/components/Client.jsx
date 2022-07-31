import { useNavigate } from 'react-router-dom'

const Client = ({ client, handleEliminar }) => {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, notas, id } = client;
  return (
    <tr className='even:bg-gray-200 even:hover:bg-slate-300  odd:hover:bg-black odd:hover:text-white transform motion-safe:hover:-translate-y-2 motion-safe:hover:scale-105 transition ease-in-out duration-500'>
      <td className='p-3'>{nombre}</td>
      <td className='p-3'>
        <p><span className='font-bold '>Email: </span>{email}</p>
        <p><span className='font-bold '>Telefono: </span>{telefono}</p>
      </td>
      <td className='p-3'>{empresa}</td>
      <td className='p-3 '>

        <button type='button' className='w-full p-2 bg-violet-700 rounded-md mb-3 text-white hover:bg-white hover:text-violet-800 hover:ring-4 ring-violet-700' onClick={() => navigate(`/clientes/${id}`)}>
          Ver
        </button>

        <button type='button' className='w-full p-2 bg-blue-600 rounded-md mb-3 text-white hover:bg-white hover:text-blue-600 hover:ring ring-blue-600' onClick={() => navigate(`/clientes/editar/${id}`)}>
          Editar
        </button>

        <button type='button' className='w-full p-2 bg-red-700 rounded-md text-white hover:bg-white hover:text-red-800 hover:ring-4 ring-red-700' 
        onClick={ () => handleEliminar(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default Client
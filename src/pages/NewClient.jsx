import Formulario from "../components/Formulario"
const NewClient = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
      <p className="mt-3 text-lg">
        Llena los siguientes campos para registrar un cliente
      </p>

      <Formulario />
    </>
  )
}

export default NewClient
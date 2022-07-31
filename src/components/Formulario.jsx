import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'

import Error from "./Error";
const Formulario = ({ client }) => {
  const navigate = useNavigate()

  const newClientScheme = Yup.object().shape({
    nombre: Yup.string().min(3, 'El nombre es muy corto').max(20, 'El nombre es muy largo').required('El nombre del cliente es obligatorio'),
    empresa: Yup.string().min(2, 'El nombre es muy corto').max(100, 'El nombre es muy largo').required('El nombre de la empresa es necesario'),
    email: Yup.string('No es un email válido').email('Email no válido').required('Debes ingresar un correo'),
    telefono: Yup.number().integer('Número no válido').positive('Número no válido').typeError('Número no válido'),
    notas: ''
  });

  const handleSubmit = async (values) => {
    try {
      let respuesta;
      if (client.id) {
        const url = `http://localhost:4000/clientes/${client.id}`;
        respuesta = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-type': 'application/json'
          }
        });
      } else {
        const url = 'http://localhost:4000/clientes';
        respuesta = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });

      }
      await respuesta.json();
      navigate('/clientes')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='shadow-lg shadow-emerald-50 bg-gray-400 px-5 py-10 rounded-lg mt-4 md:w-3/4 mx-auto '>
      <h1 className='text-black font-bold text-xl text-center uppercase mt-3'>
        {client.nombre ? 'Editar cliente' : 'Crear nuevo cliente'}
      </h1>
      <Formik
        initialValues={{
          nombre: client?.nombre ?? '',
          empresa: client?.empresa ?? '',
          email: client?.email ?? '',
          telefono: client?.telefono ?? '',
          notas: client?.notas ?? ''
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newClientScheme}
      >
        {({ errors, touched }) => {
          return (


            <Form>
              <div className="mt-4">
                <label className="hover:cursor-pointer" htmlFor="nombre">Nombre cliente:</label>
                <Field
                  id='nombre'
                  name='nombre'
                  type='text'
                  className='mt-4 w-full p-3 rounded-md block'
                  placeholder='Nombre del cliente...'
                />
                {errors.nombre && touched.nombre ? (
                  <Error>
                    {errors.nombre}
                  </Error>
                ) : null}
              </div>

              <div className="mt-4">
                <label className="hover:cursor-pointer" htmlFor="empresa">Empresa: </label>
                <Field
                  id='empresa'
                  name='empresa'
                  type='text'
                  className='mt-4 w-full p-3 rounded-md block'
                  placeholder='Empresa del cliente...'
                />
                {errors.empresa && touched.empresa ? (
                  <Error>
                    {errors.empresa}
                  </Error>
                ) : null}
              </div>

              <div className="mt-4">
                <label className="hover:cursor-pointer" htmlFor="email">Email:</label>
                <Field
                  id='email'
                  name='email'
                  type='email'
                  className='mt-4 w-full p-3 rounded-md block'
                  placeholder='Email del cliente...'
                />
                {errors.email && touched.email ? (
                  <Error>
                    {errors.email}
                  </Error>
                ) : null}
              </div>

              <div className="mt-4">
                <label className="hover:cursor-pointer" htmlFor="telefono">Teléfono:</label>
                <Field
                  id='telefono'
                  name='telefono'
                  type='tel'
                  className='mt-4 w-full p-3 rounded-md block'
                  placeholder='Teléfono del cliente...'
                />
                {errors.telefono && touched.telefono ? (
                  <Error>
                    {errors.telefono}
                  </Error>
                ) : null}
              </div>

              <div className="mt-4">
                <label className="hover:cursor-pointer" htmlFor="notas">Notas</label>
                <Field
                  as='textarea'
                  id='notas'
                  name='notas'
                  type='text'
                  className='mt-4 w-full p-3 rounded-md block h-24'
                  placeholder='Notas'
                />
              </div>

              <input className={`mt-4  w-3/4 bg-blue-800 text-white text-center p-2 rounded-md font-bold text-lg cursor-pointer ${Object.keys(errors).length > 0 ? 'disabled:opacity-70 cursor-not-allowed' : ''}`} type="submit"
                value={client.nombre ? 'Guardar cambios' : 'Agregar clientes'} />
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

Formulario.defaultProps = {
  client: {}
}
export default Formulario
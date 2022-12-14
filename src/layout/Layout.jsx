import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;
  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-blue-900 py-5 px-10'>
        <h2 className='text-4xl font-black text-center text-white drop-shadow-2xl shadow-lime-600'>
          CRM -   Clientes
        </h2>

        <nav className='mt-10 '>
          <Link to="/clientes" className={`${urlActual === '/clientes' ? 'text-blue-300 scale-125' : 'text-white'}  text-center text-2xl block mb-3 hover:text-blue-300`} >
            Clientes
          </Link>

          <Link to="/clientes/nuevo" className={`${urlActual === '/clientes/nuevo' ? 'text-blue-300 scale-125' : 'text-white'}  text-center text-2xl block mb-3 hover:text-blue-300`}>
            Nuevo cliente
          </Link>
        </nav>
      </div>

      <div className='md:w-3/4 p-10 md:overflow-scroll h-screen'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
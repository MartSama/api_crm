import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import NewClient from './pages/NewClient';
import EditClient from './pages/EditClient';
import WatchClient from './pages/WatchClient.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/clientes' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='nuevo' element={<NewClient/>}/>
          <Route path=':id' element={<WatchClient/>}/>
          <Route path='editar/:id' element={<EditClient/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

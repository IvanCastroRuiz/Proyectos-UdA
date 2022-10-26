import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

// Layout
import Layout from './Layout/Layout';

// Pages
import Home from './pages/Home';
import Formulario from './pages/Formulario';
import ListaArticulos from './pages/ListaArticulos';

// Styles 
import '../src/assets/css/normalize.css';
import '../src/assets/css/styles.css';
import '../src/assets/css/Articulo.module.css';
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Publicas */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='contacto' element={<Formulario />}/>
          <Route path='lista-articulos' element={<ListaArticulos />}/>
        </Route>
      </Routes>
    </BrowserRouter>    
  )
}

export default App

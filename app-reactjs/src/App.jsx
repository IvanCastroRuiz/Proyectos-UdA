import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

// Layout
import Layout from './Layout/Layout';

// Components
import Home from './pages/Home';
import Formulario from './pages/Formulario';

// Styles 
import '../src/assets/css/normalize.css';
import '../src/assets/css/styles.css';
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Publicas */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='contacto' element={<Formulario />}/>
        </Route>
      </Routes>
    </BrowserRouter>    
  )
}

export default App

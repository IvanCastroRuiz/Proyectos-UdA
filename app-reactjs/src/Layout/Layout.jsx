import { Outlet } from "react-router-dom";
// Components
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
       <Header/>
       <Nav/>     
       <main className="contenedor sombra">
         <Outlet/>
       </main>
       <Footer/>
    </>
  )
}
export default Layout
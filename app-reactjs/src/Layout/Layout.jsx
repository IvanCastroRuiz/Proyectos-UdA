import { Outlet } from "react-router-dom";
// Components
import Header from '../components/Header';
import Nav from '../components/Nav';

const Layout = () => {
  return (
    <>
       <Header/>
       <Nav/>     
        <Outlet/>
    </>
  )
}
export default Layout
import { BrowserRouter, Route, Routes as Link } from "react-router-dom";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Navigation = () => 
{
  return (
    <nav className="flex justify-center">
      <Navbar
        fluid={true}
        rounded={false}
        className="sticky top-0 shadow-md bg-white w-full flex justify-center "
      >
        <Navbar.Toggle className="navbar" />
        <Navbar.Collapse>
          <Navbar.Link className="ManagerPage">
          <Navigate to="/ManagerPage" state={{ from: location }} replace />
          </Navbar.Link>

          <Navbar.Link className="Modelpage">
            <Link to="/ModelPage">ModelPage</Link>
          </Navbar.Link>

          <Navbar.Link className="LoginPage">
            <Link to="/ModelPage">LoginPage</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Navigation;

import { BrowserRouter, Route, Routes as Link } from "react-router-dom";
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
        <Navbar.Toggle className="hover:text-blue-500 md:hover:text-blue-500" />
        <Navbar.Collapse>
          <Navbar.Link className="hover:text-blue-500 md:hover:text-blue-500">
            <Link to="/ModelPage">ManagerPage</Link>
          </Navbar.Link>

          <Navbar.Link className="hover:text-blue-500 md:hover:text-blue-500">
            <Link to="/ModelPage">ModelPage</Link>
          </Navbar.Link>

          <Navbar.Link className="hover:text-blue-500 md:hover:text-blue-500">
            <Link to="/ModelPage">LoginPage</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Navigation;

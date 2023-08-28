import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap


const Navbar = () => {
    const logoImageUrl = "https://cdn.icon-icons.com/icons2/907/PNG/512/kitchen-utensils_icon-icons.com_70456.png";
  
    return (
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container-fluid"> {/* Cambio de "container" a "container-fluid" */}
         <a className="navbar-brand" href="/">
            <img src={logoImageUrl} alt="Logo" className="logo-image" />
          </a>
          {/* Enlaces */}
          <div className="navbar-links">
            <a className="nav-link" href="/">Inicio</a>
            <a className="nav-link" href="/acerca">Acerca</a>
            <a className="nav-link" href="/contacto">Contacto</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
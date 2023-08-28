import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a>&copy; 2023 Tu Pagina favorita de recetas. Todos los derechos reservados.</a>
          <div className="footer-links">
            <a href="/privacidad">Política de Privacidad</a>
            <a href="/terminos">Términos y Condiciones</a>
            <a href="/contacto">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

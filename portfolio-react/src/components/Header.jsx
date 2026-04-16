import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-area">
            <h1>Iolanda Sousa</h1>
            <p>Pedagoga | Estudante de Programação</p>
          </div>
          <div className="menu-hamburguer" onClick={toggleMenu}>
            {menuAberto ? <FaTimes /> : <FaBars />}
          </div>
          <nav className={`nav-menu ${menuAberto ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><a href="#projetos" onClick={fecharMenu}>Projetos</a></li>
            </ul>
          </nav>
        </div>
      </div>
      {menuAberto && <div className="overlay" onClick={fecharMenu}></div>}
    </header>
  );
}

export default Header;
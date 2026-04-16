import React from 'react';
import { projetosData } from '../data/projetosData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projetos.css';

function Projetos() {
  return (
    <section id="projetos">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="projetos-grid">
          {projetosData.map((projeto) => (
            <div key={projeto.id} className="projeto-card">
              <div className="projeto-info">
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <div className="projeto-tecnologias">
                  {projeto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="projeto-buttons">
                  <a href={projeto.github} target="_blank" rel="noopener noreferrer" className="btn-projeto">
                    <FaGithub /> GitHub
                  </a>
                  <a href={projeto.demo} target="_blank" rel="noopener noreferrer" className="btn-projeto">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <section className="Sidebar">
        <h4>Curso</h4>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/calendar">Calendário</Link>
          <Link to="/live-lectures">Aulas ao Vivo</Link>
          <Link to="/trybe-talks">Trybe Talks</Link>
          <Link to="/solutions">Gabaritos</Link>
        </nav>
      </section>
    );
  }
}

export default Sidebar;

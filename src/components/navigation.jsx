import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Presentación</Link></li>
        <li><Link to="/experiencia">Experiencia</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/envio">Envio</Link></li>
        <li><Link to="/consumo">Personajes</Link></li>
        <li><Link to="/episodio">Episodios</Link></li>
      </ul>
    </nav>
  );
}
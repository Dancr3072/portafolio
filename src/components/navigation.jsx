import { useNavigate } from "react-router-dom";

function menu() {

// eslint-disable-next-line react-hooks/rules-of-hooks
const navigate = useNavigate();

  return (
    <nav>
    
       
        <button onClick={() => navigate("/presentacion")}>Presentación</button>

        <button onClick={() => navigate("/experiencia")}>Experiencia</button>
        
        <button onClick={() => navigate("/contacto")}>Contacto</button>
        
        <button onClick={() => navigate("/envio")}>Buscar </button>
        
        <button onClick={() => navigate("/consumo")}>Personajes</button>
        
        <button onClick={() => navigate("/episodio")}>Episodio</button>

      <hr className="divider" />

    </nav>
  );
}

export default menu;
export default function Presentacion() {
    return (
        <div className="contenedor">
            <h2>Página de Presentación</h2>
            <div className="encabezado">
                <p>23/20/2025</p>
                <p>Mi perfil laboral</p>
            </div>

            <div className="perfil-contenedor">
                {/* <img src={perfil} className="foto-perfil" /> */}

                <div className="info-perfil">
                    <h2>Tu nombre</h2>
                    <p>Tu profesión u ocupación</p>
                    <p>Breve resumen profesional para destacar fortalezas.</p>
                </div>
            </div>

            <div className="seccion">
                <h3>Habilidades</h3>
                <ul>
                    <li>HTML y CSS</li>
                    <li>Comunicación</li>
                    <li>Trabajo en equipo</li>
                </ul>
            </div>

            <div className="seccion">
                <h3>Experiencia laboral</h3>
                <div className="bloque">
                    <h4>Puesto, Empresa</h4>
                    <p>Fecha inicio - Fecha fin</p>
                    <p>Descripción breve de responsabilidades o logros.</p>
                </div>
            </div>

            <div className="seccion">
                <h3>Educación</h3>
                <div className="bloque">
                    <h4>Nombre de la titulación</h4>
                    <p>Centro educativo, año de finalización</p>
                </div>
            </div>

        </div>
    );

}
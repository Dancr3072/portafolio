export default function Presentacion() {

    return (
        <div className="contenedor">
            <h2>Página de Presentación</h2>

            <hr className="divider" />

            <div className="encabezado">
                {/* <p>23/20/2025</p>
                <p>Mi perfil laboral</p> */}
            </div>

            <div className="perfil-contenedor">
                {/* <img src={perfil} className="foto-perfil" /> */}

                <div className="info-perfil">
                    <h2 className="nombre">Daniel Celis</h2>
                    <p className="texto1">Estudiante de desarrollo de software</p>
                    <p className="texto">Estudiante de Analisis y desarrollo de software motivado y entusiasta, con habilidades en gestión del tiempo y trabajo en equipo desarrolladas en proyectos académicos. Busco aplicar mis conocimientos en programacion y crecer profesionalmente en un entorno dinámico, demostrando gran capacidad de aprendizaje y compromiso con la excelencia.</p>
                </div>
            </div>

            <hr className="divider1" />

            <div className="seccion">
                <h3>Habilidades</h3>
                <ul>
                    <li>HTML y CSS</li>
                    <li>Comunicación</li>
                    <li>Trabajo en equipo</li>
                </ul>
            </div>
            
            <hr className="divider1" />

            <div className="seccion">
                <h3>Educación</h3>
                <div className="bloque">
                    <h4>Tecnologo en analisis y desarrollo de software</h4>
                    <p>Servisio nacional de aprendisaje SENA, En formacion</p>
                </div>
            </div>

        </div>
    );

}
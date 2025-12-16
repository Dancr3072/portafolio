// Importamos React y useEffect/useState para manejar estado y ciclo de vida
import React, { useEffect, useState } from "react";

export default function Consumo() {

/**
   * 3. Definimos un estado llamado "characters"
   * - Inicialmente es un arreglo vacío []
   * - Aquí guardaremos los personajes que vienen de la API
   */
  const [characters, setCharacters] = useState([]);

  /**
   * 4. useEffect:
   * - Se ejecuta automáticamente cuando el componente se monta.
   * - Aquí hacemos la petición a la API.
   */
  useEffect(() => {
    // 5. Consumimos la API con fetch
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json()) // Convertimos la respuesta a JSON
      .then((data) => {
        /**
         * 6. La API nos devuelve un objeto con varias propiedades.
         * - "results" es un arreglo con los personajes.
         * - Guardamos ese arreglo en nuestro estado "characters".
         */
        setCharacters(data.results);
        console.log(data.results)
      })
      .catch((error) => {
        // 7. Si ocurre un error, lo mostramos en consola
        console.error("Error al cargar personajes:", error);
      });
  }, []); // [] asegura que se ejecute solo una vez al montar el componente

  /**
   * 8. Renderizamos el DOM con JSX:
   * - Usamos characters.map() para recorrer el arreglo.
   * - Por cada personaje, generamos un <li> con su información.
   */
  return (
    <div>
      {/* Título principal */}
      <h1>Personajes de Rick and Morty</h1>

      <hr className="divider1" />

      {/* Lista de personajes */}
      <ul>
        {characters.map((character) => (
          <>

          <li  className="listaper" key={character.id}>

            <div>

            {/* Nombre */}
            <h2  className="nombreper">{character.name}</h2>
            {/* Imagen */}

            </div>

            <div className="Estado">

            <img src={character.image} alt={character.name} className="img-per" />
            
            <ul className="listaesta">

            <li>

            {/* Estado */}            
            <p><span class="resaltado">Estado:</span> {character.status}</p>

            </li>

            <li>

            {/* Especie */}
            <p><span class="resaltado">Especie:</span> {character.species}</p>

            </li>

            </ul>

            </div>

          </li>
          
          <hr className="divider1" />
          
          </>

        ))}
      </ul>
    </div>
  );
}
import { useState, useEffect } from 'react';

export default function Episodio () {
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cambia el número al final para traer otro episodio
    fetch('https://rickandmortyapi.com/api/episode/28')
      .then(response => response.json())
      .then(data => {
        setEpisode(data);
        setLoading(false);
      })
      .catch(error => console.error("Error cargando el episodio:", error));
  }, []);

  if (loading) return <p>Cargando episodio...</p>;

  return (
    <div className='episodio'>
      <h1 className='tituloepi'>{episode.name}</h1>

      <div>

      <p className='texto3'><strong>Código:</strong> {episode.episode}</p>

      <p className='texto3'><strong>Fecha de estreno:</strong> {episode.air_date}</p>

      </div>

      
    </div>
  );
}


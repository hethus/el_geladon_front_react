import './style.css';
import { useState, useEffect } from 'react';
import Card from '../Card';

const Home = () => {
  const [palettes, setPalettes] = useState([]);

  const getPalette = async () => {
    const response = await fetch('http://localhost:8000/paletas/listar-todas');
    const palettesList = await response.json();

    setPalettes(palettesList);
  };

  useEffect(() => {
    getPalette();
  }, []);

  return (
    <div className="home-container">
      <h2>Lista de Paletas:</h2>
      <hr />
      <div>
        {palettes.map((element) => {
          return <Card key={element._id} palette={element}/>;
        })}
      </div>
    </div>
  );
}

export default Home;
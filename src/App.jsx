import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';

const App = () => {
  const [palettes, setPalettes] = useState([]);

  const getPalettes = async () => {
    const response = await fetch('http://localhost:8000/paletas/listar-todas');
    const palettesList = await response.json();

    setPalettes(palettesList);
  };

  useEffect(() => {
    getPalettes();
  }, []);

  return (
    <>
      <Toaster />
      <Header getPalettes={getPalettes}/>
      <Home palettes={palettes} getPalettes={getPalettes}/>
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Footer from './componentes/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;

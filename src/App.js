
import { BrowserRouter, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/Home';
import AboutPage from './Pages/About/About.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={HomePage} />
          <Route path='/about' element={AboutPage} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <Hero />

    </>
  );
}

export default App;

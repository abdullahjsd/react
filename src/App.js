import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Yemek from './pages/Yemek';
import Buyuk from './pages/Buyuk';
import Su from './pages/Su';
import Carsi from './pages/Carsi';
import Notfound from './pages/notFound';
import Header from './components/header';
import './App.css';


function App() {
  return (
    <div className="App">

      <Header />


      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/yemek' element={<Yemek />} />
        <Route exact path='/buyuk' element={<Buyuk />} />
        <Route exact path='/su' element={<Su />} />
        <Route exact path='/carsi' element={<Carsi />} />
        <Route exact path='*' element={<Notfound />} />

      </Routes>
    </div>
  );
}

export default App;

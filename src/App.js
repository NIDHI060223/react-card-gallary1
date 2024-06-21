import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ImageGallery from './ImageGallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/image-gallery/' element={<ImageGallery/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

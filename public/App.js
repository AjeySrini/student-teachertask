import './App.css';

import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

import Add from './Components/Add';
import Edit from './Components/Edit';
import Home from './Components/Home';
import CityMovies from './Components/CityMovies';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <header>
          <Link to="/movies">Home</Link>&nbsp;&nbsp;
          <Link to="/movies/add">Add Movie</Link>&nbsp;&nbsp;
          <Link to="/movies/edit">Edit Movie</Link>
        </header>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="movies" >
            <Route index element={<Home />} />
            <Route path="add" element={<Add />} />
            <Route path="edit" element={<Edit />} />
            <Route path=":cityName" element={<CityMovies />} />
          </Route>
          <Route path="/404" element={<h3>Page not found, please check url</h3>} />
          {/* Last path should be default path */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
